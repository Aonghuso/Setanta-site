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
scriosadh. Bainimid úsáid as an gníomh `glan@stáitse` chun é sin a dhéanamh.

Tar éis é sin, is féidir linn dath an pinn a athrú. Ba mhaith liom slacán dearg a tharraingt, mar
sin athróidh mé an dath go dearg le `dath@stáitse("dearg")`{.setanta}.

Anois táimid in ann an gníomh `dron_lán@stáitse` a úsáid chun **dron**uilleog **lán** a tharraingt
le haghaidh an slacán. Glacann sé le 4 argóint, an x-comhordanáid, an y-comhordanáid, an leithead
agus an airde:

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
