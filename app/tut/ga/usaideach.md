---
title: Roinnt Gníomhartha Úsáideacha
prev: gniomh
prev-text: Ní Briathra a Dhearbhaíonn Ach Gníomh
---

# Mata

Go dtí seo chonaiceamar go leor gníomhartha difriúla (`codladh`{.setanta}, `scríobh`{.setanta}
srl.). Sula leanaimid ar aghaidh le níos mó gnéithe *Setanta*, ba chóir dúinn fanacht ar feadh
nóiméad agus féachaint ar cúpla gníomhartha agus oibritheoirí úsáideacha eile.

## Níos mó oibritheoirí

Chonaiceamar níos luaithe sa teagasc seo na hoibritheoirí `+`, `-`, `*` agus `/`. Tá dhá
oibritheoirí matamaitice eile ag *Setanta*, an oibritheoir "modulo" (`%`) agus an oibritheoir
roinnt-slánuimhreacha (`//`).

### Modulo

Is oibritheoir neamhghnách é an oibritheoir modulo (`%`), ach tá sé an-úsáideach.

Glacann an oibritheoir sin le dhá uimhreacha, roinneann sé an chéad ceann leis an dara agus tugann sé ar ais an fuílleach.

Mar shampla, tá `7 % 2`{.setanta} cothrom le `1`{.setanta} mar nuair a roinneann tú `7`{.setanta} le
`2`{.setanta}, tá an fuílleach cothrom le `1`{.setanta} mar tá `7 == 3*2 + 1`{.setanta}. Mar an
gcéanna, tá `11 % 4`{.setanta} cothrom le `3`{.setanta} mar tá `11 == 2*4 + 3`{.setanta}.

#### Corr nó Réidh?

Tá an oibritheoir seo úsáideach mar is féidir linn é a úsáid le haghaidh a lán rudaí a dhéanamh. Mar
shampla, is féidir linn é a úsáid chun seiceáil an bhfuil uimhir éigin corr nó réidh. Chun é sin a
dhéanamh níl ach le déanamh againn ach seiceáil cad é an fuílleach nuair a roinneann tú an uimhir
faoi 2. Má tá an fuílleach cothrom le 0, is uimhir réidh é mar is féidir linn an uimhir a roinn faoi
2 gan fuílleach. Má tá sé cothrom le 1 is uimhir corr é. Bain triail as an ríomhchlár seo:

{{{
le i idir (0, 10) {
    má i % 2 == 0 {
        scríobh("Is uimhir réidh é", i)
    } nó {
        scríobh("Is uimhir corr é", i)
    }
}
}}}

#### An bhfuil sé príomha?

Is féidir linn an oibritheoir `%` a úsáid chun seic a dhéanamh an féidir leat uimhir a roinnt faoi
uimhir eile (má tá `x % y == 0`{.setanta}, is féidir leat `x` a roinn faoi `y`). Is féidir linn an
cumas seo a úsáid chun seiceáil an bhfuil uimhir éigin príomha.

Is uimhir príomha é uimhir lé 2 fhachtóir, an uimhir féin agus 1. Chun seic a dhéanamh an bhfuil
uimhir príomha is féidir linn an méid fachtóirí a chomhaireamh mar seo:

```{.setanta .numberLines}
gníomh príomha(x) {
    >-- Athróg don méid fachtóirí
    fachtóirí := 0

    >-- Déan seic ar gach uimhir idir 1 agus x
    le i idir (1, x + 1) {
        >-- Má tá an seic seo fíor, is féidir leat roinn x faoi i.
        >-- Mar sin is fachtóir é i.
        má x % i == 0 {
            fachtóirí += 1
        }
    }

    >-- Má tá fachtóirí == 2, is uimhir príomha é x.
    >-- Mura bhfuil sé, ní uimhir príomha é x.
    toradh divisors == 2
}
```

Bain triail as an cód sin le cúpla uimhir:

{{{
gníomh príomha(x) {
    >-- Athróg don méid fachtóirí
    fachtóirí := 0

    >-- Déan seic ar gach uimhir idir 1 agus x
    le i idir (1, x + 1) {
        >-- Má tá an seic seo fíor, is féidir leat roinn x faoi i.
        >-- Mar sin is fachtóir é i.
        má x % i == 0 {
            fachtóirí += 1
        }
    }

    >-- Má tá fachtóirí == 2, is uimhir príomha é x.
    >-- Mura bhfuil sé, ní uimhir príomha é x.
    toradh fachtóirí == 2
}

uimhir := go_uimh(ceist("Roghnaigh uimhir: "))
má príomha(uimhir) {
    scríobh("Is uimhir príomha é", uimhir)
} nó {
    scríobh("Ní uimhir príomha é", uimhir)
}
}}}

#### Liostaí gan teorainn

Léigh an ríomhchlár seo agus smaoinigh faoin seicheamh uimhreacha a scríobhann sé.

{{{
le i idir (0, 15) {
    fuílleach_5 := i % 5
    scríobh(i, " % 5 ==", fuílleach_5)
}
}}}


Scríobhann an ríomhchlár sin fuílleach gach uimhir idir 0 agus 15 nuair a roinneann tú iad faoi 5.
Má léann tú an seicheamh uimhreacha a scríobhann sé feicfidh tú an seicheamh "0", "1", "2", "3",
"4", ansin tosaíonn sé ar ais ag "0" agus leanann sé ar aghaidh sa treo céanna: "1", "2", "3"
"4", "0" ... srl.

![Ciorcal luachanna](assets/ciorcal-inneacs.png)

Má ritheann tú an ríomhchlár sin le raon uimhreacha níos mó feicfidh tú an patrún céanna.
Níl tharlaíonn na patrún sin le `i % 5`{.setanta} amháin, má dhéanann tú an rud céanna le uimhir
éigin `n`, gheobhaidh tú an seicheamh `0, 1, 2 ... n - 1, 0, 1, 2, ..., n - 1, ...`{.setanta} srl.

![Ciorcal luachanna n](assets/ciorcal-inneacs-n-1.png)

Is féidir linn an patrún seo a úsáid chun dul thar liosta arís agus arís, cosúil go liosta gan
teorainn é:

Féach ar gcód seo:

{{{
liosta := ["Gaeilge", "Béarla", "Fraincis"]

le i idir (0, 10) {
    scríobh(liosta[i])
}
}}}

Scríobhann an ríomhchlár sin baill an liosta ach ansin baineann sé triail an ball ag an innéacs
`4`{.setanta} a roghnú agus teipeann air mar tá `4` ró mhór. Ach, má úsáidimid an oibritheoir modulo
`%` chun dul ar ais go `0` nuair a shroichimid deireadh an liosta beidh gach rud ceart go leor. Tá
fad an liosta cothrom le `3`{.setanta}, dá bhrí sin beidh `i % fad@liosta`{.setanta} cothrom le
`0`{.setanta}, `1`{.setanta} nó `2`{.setanta} i gcónaí. Bain triail as ár gcód nua:

{{{
liosta := ["Gaeilge", "Béarla", "Fraincis"]

le i idir (0, 10) {
    scríobh(liosta[i % fad@liosta])
}
}}}

Anois ní theipeann ar an ríomhchlár nuair a shroicheann sé deireadh an liosta, in ionad sin téann
sé ar ais go dtí an tús. Bain triail as teanga nua a chuir leis an liosta agus an cód a rith arís,
feicfidh tú go dhéanann sé an rud céanna: rachaidh an lúb thar an liosta arís agus arís.

### [[Roinnt Slánuimhreacha|Integer Division]]

Níos luaithe sa teagasc seo, chonaiceamar an oibritheoir roinnte (`/`): mar shampla, `10 / 5 ==
2`{.setanta}.

Tá oibritheoir eile againn atá an cosúil leis an oibritheoir roinnte, an oibritheoir roinnt
slánuimhreacha: `//`. Oibríonn sé mar an gcéanna, ach tar éis dó na huimhreacha a roinnt slánaíonn
sé an uimhir síos. Dá bhrí sin faigheann tú slánuimhir i gcónaí.

Mar shampla, tá `5 / 2`{.setanta} cothrom le `2.5`{.setanta}, ach tá `5 // 2`{.setanta} cothrom le
`2`{.setanta}; Tá `10 / 3`{.setanta} cothrom le `3.333`{.setanta} ach tá `10 // 3`{.setanta} cothrom
le `3`{.setanta}.

## Gníomhartha Matamaitice

Chonaiceamar roinnt gníomhartha matamaitice cheanna sa teagasc seo, go háirithe
`rand@mata`{.setanta} agus `slánuimh_rand@mata`{.setanta}, áfach, tá a lán níos mó gníomhartha agus
luachanna matamaitice ar fáil i *Setanta*.

Seo liosta gearr do na gníomhartha agus luachanna atá ar fáil, bá chóir duit `@mata`{.setanta} a
úsáid chun iad a roghnú, mar shampla `fréamh@mata`{.setanta}.

### Luachanna

| Ainm | Cur síos | Sampla
|:------|:-----:|----:|
| `pí` | An tairiseach Pí (3.1415...) | `2 * pí@mata * r`{.setanta} |
| `e` | An tairiseach e (an uimhir Euler) (2.71828...) | `cmhcht@mata(e@mata, 2)`{.setanta} |

### Gníomhartha

| Ainm | Cur síos | Sampla
|:------|:-----:|----:|
| `fréamh` | An fréamh cearnach (√) | `fréamh@mata(4) == 2`{.setanta} |
| `cearn` | Feidhm cearnach (`x²`) |  `cearn@mata(2) == 4`{.setanta} |
| `dearbh` | Feidhm Dearbhluacha (`|x|`) | `dearbh@mata(-2) == 2`{.setanta} |
| `eas` | Feidhm easpónantúile (`e^x`) | `eas@mata(1) == e@mata`{.setanta} |
| `cmhcht` | Feidhm cumhachta (`x^y`) | `cmhcht@mata(2, 4) == 16`{.setanta} |
| `log` | Feidhm logartaim | `log@mata(2)`{.setanta} |
| `logb` | Logartam i mbun éigin | `logb@mata(16, 2) == 4`{.setanta} |
| `sin`  | Feidhm Sine | `sin@mata(pi@mata/2)`{.setanta} |
| `cos`  | Feidhm Cosine | `cos@mata(0)`{.setanta} |
| `tan`  | Feidhm Tangaint | `tan@mata(pi@mata)`{.setanta} |
| `asin` | Feidhm sine inbhéarta | `asin@mata(0)`{.setanta} |
| `acos` | Feidhm cosine inbhéarta | `acos@mata(pi@mata)`{.setanta} |
| `atan` | Feidhm tangaint inbhéarta | `atan@mata(0)`{.setanta} |
| `rand` | Uimhir randamach idir 0 agus 1 | `rand@mata()`{.setanta} |
| `slánuimh_rand` | Slánuimhir randamach i raon éigin | `slánuimh_rand@mata(5, 10)`{.setanta} |
