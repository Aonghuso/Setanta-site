---
title: Cluiche
prev: usaideach
prev-text: Roinnt Gníomhartha Úsáideacha
tsn-fname: game-time
---

# Cluiche Preibe

Anois bainimis úsáid ár n-eolas nua le roinnt gníomhartha nua chun cluiche a chruthú cosúil leis na
cluichí cáiliúla *Pong* nó *Breakout*. Beidh slacán againn ag bun an stáitse agus beidh muid ábalta
é a bhogadh chun bhreith ar an liathróid ag preabadh.

<!--TODO Screenshot -->

# An Lúb Tarraingthe

Chun ár ngrafaicí a smachtú bainfimid úsáid as "lúb tarraingthe". Is coincheap simplí é lúb
tarraingthe: Cruthóimid gníomh chun na páirteanna dár gcluiche a tharraingt ar an stáitse agus
glaofaimid air arís agus arís i lúb, ní stopfaimid go dtí go stopfaidh an cluiche.

Tar éis gach glaoch ar an gníomh, ba chóir dúinn fanacht ar feadh cúpla milleasoicind chun caochaíl
a sheachaint.

Tosaímis leis an cód seo:


```{.setanta .numberLines}
gníomh tarraing_stáitse() {
    >-- Cuirfimid ár cód tarraingthe anseo.
}

>-- Lúb go deo.
nuair-a fíor {
    >-- Glaoigh ar an gníomh tarraing_stáitse.
    tarraing_stáitse()

    >-- Codail ar feadh cúple milleasoicind.
    codladh(10)
}
```

# An Slacán

Tosaímis anois leis an slacán. Teastaíonn slacán uainn ar féidir linn bogadh ar chlé agus ar dheis
ag bun an stáitse. Cruthaímis roinnt athróga agus cuirimis cód sa ghníomh
`tarraing_stáitse`{.setanta} chun an slacán a tharraingt.

Cruthaímis athróga `airde_slacán` agus `lthd_slacán` le haghaidh airde agus leithead an slacáin. Le
haghaidh an airde, is féidir linn luach beag (m.sh. `20`{.setanta}) chun slacán beag ach infheicthe
a fháil. Le haghaidh an leithead is féidir linn `fad_x@stáitse`{.setanta} a úsáid chun leithead a
roghnú ata cothrom le 20% de leithead an stáitse.

Anois cuirimid an cód seo sa ríomhchlár:

```{.setanta .numberLines}
airde_slacán := 20
lthd_slacán := fad_x@stáitse // 5
```

Anois is féidir linn 2 athróg nua `x_slacán` agus `y_slacán` a dhéanamh. Cuirfimid an x-comhordanáid
agus an y-comhordanáid sna hathróga sin. Go sonrach, cuirimid comhordanáidí an cúinne ag an mbarr ar
dheis den slacán sna hathróga sin. Ba mhaith linn tosaigh leis an slacán ag bun an stáitse ar an
taobh clé, dá bhrí sin tosóimid le `x_slacán` cothrom le `0`{.setanta}, ach cad a úsáidfimid le
haghaidh `y_slacán`? Má úsáidimid `0`{.setanta} beidh an slacán ag barr an stáitse, ach má
úsáidfimid `fad_y@stáitse`{.setanta} ní bheimid in ann an slacán a fheiceáil mar beidh sé faoi bhun
an stáitse. Caithfimid airde an slacán a bhaint as airde an stáitse chun an y-comhordanáid ceart a
fháil: `fad_y@stáitse - airde_slacán`{.setanta}.

![y_slacán](assets/y_slacan.png)

Anois seo é ár ríomhchlár reatha.

```{.setanta .numberLines}
airde_slacán := 20
lthd_slacán := fad_x@stáitse // 5

x_slacán := 0
y_slacán := fad_y@stáitse - airde_slacán

gníomh tarraing_stáitse() {
    >-- Cuirfimid ár cód tarraingthe anseo.
}

>-- Lúb go deo.
nuair-a fíor {
    >-- Glaoigh ar an gníomh tarraing_stáitse.
    tarraing_stáitse()

    >-- Codail ar feadh cúple milleasoicind.
    codladh(10)
}
```

## Tarraing an slacán

Anois tá a fhios againn cá bhfuil ár slacán (`x_slacán`, `y_slacán`) agus cé chomh mór atá sé
(`airde_slacán`, `lthd_slacán`), is féidir linn é a tharraingt.

Sula dtarraingeoimid ár slacán, ba chóir dúinn an stáitse a ghlanadh chun aon sean-rudaí a
scriosadh. Bainimid úsáid as an gníomh `glan@stáitse`{.setanta} chun é sin a dhéanamh.

Tar éis é sin, is féidir linn dath an pinn a athrú. Ba mhaith liom slacán dearg a tharraingt, mar
sin athróidh mé an dath go dearg le `dath@stáitse("dearg")`{.setanta}.

Anois táimid in ann an gníomh `dron_lán@stáitse`{.setanta} a úsáid chun **dron**uilleog **lán** a
tharraingt le haghaidh an slacán. Glacann sé le 4 argóint, an x-comhordanáid, an y-comhordanáid, an
leithead agus an airde:

Anois seo é ár gníomh `tarraing_stáitse`:

```{.setanta .numberLines}
gníomh tarraing_stáitse() {
    >-- Glan an stáitse
    glan@stáitse()

    >-- Úsáid peann dearg
    dath@stáitse("dearg")

    >-- Tarraing an slacán
    dron_lán@stáitse(x_slacán, y_slacán, lthd_slacán, airde_slacán)
}
```

Anois bainimis triail as ár ríomhchlár:

{{{s
airde_slacán := 20
lthd_slacán := fad_x@stáitse // 5

x_slacán := 0
y_slacán := fad_y@stáitse - airde_slacán

gníomh tarraing_stáitse() {
    >-- Glan an stáitse
    glan@stáitse()

    >-- Úsáid peann dearg
    dath@stáitse("dearg")

    >-- Tarraing an slacán
    dron_lán@stáitse(x_slacán, y_slacán, lthd_slacán, airde_slacán)
}

>-- Lúb go deo.
nuair-a fíor {
    >-- Glaoigh ar an gníomh tarraing_stáitse.
    tarraing_stáitse()

    >-- Codail ar feadh cúple milleasoicind.
    codladh(10)
}
}}}

**Ná dean dearmad an cnaipe <iron-icon class="play" icon="av:stop"></iron-icon> a bhrúigh chun an
ríomhchlár a stopadh**

Bá chóir duit slacán beag dearg ag bun an stáitse a fheiceáil.

## Bog an slacán

Anois is féidir linn an slacán a tharraingt ach conas a bhogaimid é? Is féidir linn an gníomh
`méarchlár` a úsáid chun gach eochairbhrú a fháil ón úsáideoir.

Ar dtús, cruthaímis gníomh nua agus tugaimis `smacht_eochrach` air. Glaofar ar an gníomh seo nuair a
brúnn an úsáideoir eochair ar an méarchlár. Bá chóir dó argóint amháin a ghlacadh le: an eochair a
bhí brúite.

```{.setanta .numberLines}
gníomh smacht_eochrach(eochair) {
}
```

Anois cuirimis `scríobh(eochair)`{.setanta} sa ghníomh, ach athróimid é sin níos déanaí.

```{.setanta .numberLines}
gníomh smacht_eochrach(eochair) {
    scríobh(eochair)
}
```

Bainimid úsáid as an gníomh `méarchlár@stáitse`{.setanta} chun ár ngníomh nua a nasc leis an
méarchlár. Glaoimid ar `méarchlár@stáitse(smacht_eochrach)`{.setanta} chun é sin a dhéanamh.

**Tosaigh an ríomhchlár nua anseo, brúigh ar na saigheadeochracha ar do mhéarchlár agus ansin bog go
dtí an consól agus féach air.**

{{{s
airde_slacán := 20
lthd_slacán := fad_x@stáitse // 5

x_slacán := 0
y_slacán := fad_y@stáitse - airde_slacán

gníomh tarraing_stáitse() {
    >-- Glan an stáitse
    glan@stáitse()

    >-- Úsáid peann dearg
    dath@stáitse("dearg")

    >-- Tarraing an slacán
    dron_lán@stáitse(x_slacán, y_slacán, lthd_slacán, airde_slacán)
}

gníomh smacht_eochrach(eochair) {
    scríobh(eochair)
}

méarchlár@stáitse(smacht_eochrach)

>-- Lúb go deo.
nuair-a fíor {
    >-- Glaoigh ar an gníomh tarraing_stáitse.
    tarraing_stáitse()

    >-- Codail ar feadh cúple milleasoicind.
    codladh(10)
}
}}}

Ba chóir duit "ArrowRight", "ArrowLeft", "ArrowDown" nó "ArrowUp" a fheiceáil ar an gconsól. **Tá na
hainmneacha seo as Béarla mar is ainmneacha caighdeánacha iad, tagann na hainmneacha ón brabhsalaí,
ní rudaí *Setanta* iad.** Nuair a brúnn tú ar eochair éigin agus an ríomhchlár ar siúl, glaoitear ar
`smacht_eochrach` le ainm na heochrach. Is féidir linn an cumas seo a úsáid chun an slacán a bhogadh
nuair a brúitear ar an saighead chlé nó dheis.

Cruthaímis anois athróg nua `luas_slacán` chun luas an slacáin a smachtú (cé chomh fada a bhogann an
slacán nuair a brúnn an úsáideoir saighead éigin). Tosaímis leis an luach `50`{.setanta}.

Anois is féidir linn cód a chur sa inár ngníomh `smacht_eochrach` chun an athróg `x_slacán` a athrú
chun an slacán a bhogadh ar dheis nó ar chlé mar seo:

```{.setanta .numberLines}
luas_slacán := 50

gníomh smacht_eochrach(eochair) {
    má eochair == "ArrowLeft" {
        x_slacán -= luas_slacán
    } nó má eochair == "ArrowRight" {
        x_slacán += luas_slacán
    }
}
```

Oibríonn an cód mar seo: má brúitear ar an saighead chlé, glaoitear ar an gníomh `smacht_eochrach`
leis an téacs "ArrowLeft"; Má tharlaíonn é sin, laghdaímid an athróg `x_slacán` faoi `luas_slacán`.
Ar an lámh eile, má brúitear ar an saighead dheis, glaoitear ar an gníomh le "ArrowRight" agus
méadaímid `x_slacán` faoi `luas_slacán`.

Bain triail as an cód nua: Brúigh ← nó → agus ba chóir duit a fheiceáil an slacán ag bogadh.

{{{s
airde_slacán := 20
lthd_slacán := fad_x@stáitse // 5

x_slacán := 0
y_slacán := fad_y@stáitse - airde_slacán
luas_slacán := 50

gníomh tarraing_stáitse() {
    >-- Glan an stáitse
    glan@stáitse()

    >-- Úsáid peann dearg
    dath@stáitse("dearg")

    >-- Tarraing an slacán
    dron_lán@stáitse(x_slacán, y_slacán, lthd_slacán, airde_slacán)
}

gníomh smacht_eochrach(eochair) {
    má eochair == "ArrowLeft" {
        x_slacán -= luas_slacán
    } nó má eochair == "ArrowRight" {
        x_slacán += luas_slacán
    }
}

méarchlár@stáitse(smacht_eochrach)

>-- Lúb go deo.
nuair-a fíor {
    >-- Glaoigh ar an gníomh tarraing_stáitse.
    tarraing_stáitse()

    >-- Codail ar feadh cúple milleasoicind.
    codladh(10)
}
}}}
