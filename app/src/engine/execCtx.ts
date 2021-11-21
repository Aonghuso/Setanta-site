import { Value } from "setanta/node_build/values";
import { Parser, SyntaxErr } from "setanta/node_build/gen_parser";
import { Interpreter } from "setanta/node_build/i10r";
import { genBuiltins } from "./builtins";
import { DisplayEngine } from "./engine";

export class ExecCtx {
    private writeFn: (x: string) => void;
    private display: DisplayEngine;
    private halt = true;
    private interpreter: Interpreter | null = null;
    private currentWriteWait: ((s: string) => void) | null = null;

    constructor(write: (x: string) => void, display: DisplayEngine) {
        this.writeFn = write;
        this.display = display;
    }

    public handleKeyDown(e: KeyboardEvent): void {
        this.interpreter?.inject(() => this.display.keyDownFn(e.key));
    }

    public handleKeyUp(e: KeyboardEvent): void {
        this.interpreter?.inject(() => this.display.keyUpFn(e.key));
    }

    // Takes relative x and y positions
    public handleMouseDown(x: number, y: number): void {
        // We multiply the relative positions by the height
        // and width to get absolute positions
        this.interpreter?.inject(() => this.display.mouseDownFn(x * this.display.sizeX, y * this.display.sizeY));
    }

    // Takes relative x and y positions
    public handleMouseUp(x: number, y: number): void {
        // We multiply the relative positions by the height
        // and width to get absolute positions
        this.interpreter?.inject(() => this.display.mouseUpFn(x * this.display.sizeX, y * this.display.sizeY));
    }

    // Takes relative x and y positions
    public handleMouseMove(x: number, y: number): void {
        // We multiply the relative positions by the height
        // and width to get absolute positions
        this.interpreter?.inject(() => this.display.mouseMoveFn(x * this.display.sizeX, y * this.display.sizeY));
    }

    public stop(): void {
        this.halt = true;
        if (this.interpreter) {
            this.interpreter.stop();
        }
    }

    public running(): boolean {
        return !this.halt;
    }

    public write(s: string): void {
        if (this.currentWriteWait) {
            this.currentWriteWait(s);
            this.currentWriteWait = null;
        }
    }

    public async run(prog: string): Promise<SyntaxErr[]> {
        // TODO return static errors too
        const builtins = genBuiltins(this.display, this.writeFn,
            (fn) => { this.currentWriteWait = fn; });

        const p = new Parser(prog);
        const res = p.parse();
        if (res.errs.length > 0)
            return res.errs;
        if (res.ast === null)
            return Promise.reject(new Error("Theip ar an bparsálaí: Earráid anaithnid"));
        const ast = res.ast;
        // 30 ticks-per-second.
        const i = new Interpreter(30, builtins);
        this.interpreter = i;
        this.halt = false;
        try {
            await i.interpret(ast);
        } finally {
            this.stop();
        }
        return [];
    }
}
