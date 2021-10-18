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
roinnt-slanúimhreacha (`//`).

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
