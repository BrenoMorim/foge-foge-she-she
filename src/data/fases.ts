import IFase from "types/IFase";

const fases_disponiveis = [
    {
        id: 1,
        label: "Tutorial",
        mapa: [
            "   [-]   ".split(""),
            "[--}S{--]".split(""),
            "|J**E**B|".split(""),
            "{-------}".split("")
        ] 
    },
    {
        id: 2,
        label: "Meio fácil",
        mapa: [
            "[-------]".split(""),
            "|***S***|".split(""),
            "|*|**|**|".split(""),
            "|*|**|**|".split(""),
            "|*{-E{-*|".split(""),
            "|B*****J|".split(""),
            "{-------}".split("")
        ]
    },
    {
        id: 3,
        label: "Mais ou menos",
        mapa: [
            "[--------]".split(""),
            "|***S***J|".split(""),
            "|*[**|*|*|".split(""),
            "|*|**|***|".split(""),
            "|*{-B{-**|".split(""),
            "|********|".split(""),
            "|*{----}*|".split(""),
            "|***E****|".split(""),
            "{--------}".split("")
        ]
    },
    {
        id: 4,
        label: "Nível médio",
        mapa: [
            "[--------]".split(""),
            "|E****|*J|".split(""),
            "|--*--}**|".split(""),
            "|********|".split(""),
            "|*|******|".split(""),
            "|*{*---]*|".split(""),
            "|********|".split(""),
            "|*-----}*|".split(""),
            "|B******S|".split(""),
            "{--------}".split("")
        ]
    },
    {
        id: 5,
        label: "Pouquinho difícil",
        mapa: [
            "[--------]".split(""),
            "|B******S|".split(""),
            "|*[--*-]*|".split(""),
            "|*|******|".split(""),
            "|*{--**|*|".split(""),
            "|******|*|".split(""),
            "|*|**|*|J|".split(""),
            "|*|*-}*|*|".split(""),
            "|******|*|".split(""),
            "|*{----}*|".split(""),
            "|E*******|".split(""),
            "{--------}".split("")
        ]
    },
    {
        id: 6,
        label: "Sorrisinho =)",
        mapa: [
            " [------] ".split(""),
            "[}B****J{]".split(""),
            "|********|".split(""),
            "|**|**|**|".split(""),
            "|**|**|**|".split(""),
            "|*S****E*|".split(""),
            "|*|****|*|".split(""),
            "|*{----}*|".split(""),
            "|********|".split(""),
            "{]******[}".split(""),
            " {------} ".split("")
        ]
    },
    {
        id: 7,
        label: "Coelhinho",
        mapa: [
            "  []  []  ".split(""),
            "  ||  ||  ".split(""),
            " [------] ".split(""),
            "[}B****J{]".split(""),
            "|********|".split(""),
            "|*[]**[]*|".split(""),
            "|*||**||*|".split(""),
            "|********|".split(""),
            "|***{}***|".split(""),
            "|*--**--*|".split(""),
            "|S*-**-*E|".split(""),
            "{]******[}".split(""),
            " {------} ".split("")
        ]
    },
    {
        id: 8,
        label: "Divisão",
        mapa: [
            "[-------]".split(""),
            "|******B|".split(""),
            "|*[-S-]*|".split(""),
            "|*|***|*|".split(""),
            "|*}*|*{*|".split(""),
            "|***|***|".split(""),
            "|*]*|*[*|".split(""),
            "|*|***|*|".split(""),
            "|*{-E-}*|".split(""),
            "|J******|".split(""),
            "{-------}".split("")
        ]
    },
    {
        id: 9,
        label: "Labirinto",
        mapa: [
            "[--------]".split(""),
            "|J|*****S|".split(""),
            "|*{--}*]*|".split(""),
            "|******|*|".split(""),
            "|*|*[}*|*|".split(""),
            "|*|*|****|".split(""),
            "|*|*{*-|*|".split(""),
            "|*|****|*|".split(""),
            "|*|*|**|*|".split(""),
            "|*{---*|*|".split(""),
            "|E******B|".split(""),
            "{--------}".split("")
        ]
    },
    {
        id: 10,
        label: "Perseguição",
        mapa: [
            "[-------]".split(""),
            "|*******|".split(""),
            "|*[-*-]*|".split(""),
            "|*|*E*|*|".split(""),
            "|*|***|*|".split(""),
            "|*|***|*|".split(""),
            "|*|*|*|*|".split(""),
            "|*|*|***|".split(""),
            "|*{---}*|".split(""),
            "|**SJ|*B|".split(""),
            "{-------}".split("")
        ]
    },
    {
        id: 11,
        label: "Emparedado",
        mapa: [
            "[--------]".split(""),
            "|******|S|".split(""),
            "|*[---*}*|".split(""),
            "|*|******|".split(""),
            "|***[--]E|".split(""),
            "|*|*|**|*|".split(""),
            "|*|******|".split(""),
            "|*|**--]*|".split(""),
            "|B{-***|*|".split(""),
            "|*J******|".split(""),
            "{--------}".split("")
        ]
    },
] as IFase[];

export default fases_disponiveis; 