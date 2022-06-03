// export const fases_disponiveis = [
//     {
//         id: 1,
//         label: "Tutorial",
//         posicaoPersonagens: {
//             sherlock: {
//                 i: 1,
//                 j: 4
//             },
//             breno: {
//                 i: 2,
//                 j: 7
//             },
//             jaminha: {
//                 i: 2,
//                 j: 1
//             }
//         },
//         mapa: [
//             "[-------]".split(""),
//             "|--}S{--|".split(""),
//             "|J**E**B|".split(""),
//             "{-------}".split("")
//         ] 
//     },
//     {
//         id: 2,
//         label: "Nível fácil",
//         posicaoPersonagens: {
//             sherlock: {
//                 i: 1,
//                 j: 4
//             },
//             breno: {
//                 i: 5,
//                 j: 1
//             },
//             jaminha: {
//                 i: 5,
//                 j: 7
//             }
//         },
//         mapa: [
//             "[-------]".split(""),
//             "|*|*S***|".split(""),
//             "|****|**|".split(""),
//             "|*|**|**|".split(""),
//             "|*{-E{-*|".split(""),
//             "|B*****J|".split(""),
//             "{-------}".split("")
//         ]
//     },
//     {
//         id: 3,
//         label: "Mais ou menos",
//         posicaoPersonagens: {
//             sherlock: {
//                 i: 1,
//                 j: 4
//             },
//             breno: {
//                 i: 4,
//                 j: 4
//             },
//             jaminha: {
//                 i: 1,
//                 j: 8
//             }
//         },
//         mapa: [
//             "[--------]".split(""),
//             "|***S***J|".split(""),
//             "|*[**|*|*|".split(""),
//             "|*|**|***|".split(""),
//             "|*{-B{-**|".split(""),
//             "|********|".split(""),
//             "|*{----}*|".split(""),
//             "|***E****|".split(""),
//             "{--------}".split("")
//         ]
//     },
//     {
//         id: 4,
//         label: "Nível médio",
//         posicaoPersonagens: {
//             sherlock: {
//                 i: 8,
//                 j: 8
//             },
//             breno: {
//                 i: 8,
//                 j: 1
//             },
//             jaminha: {
//                 i: 1,
//                 j: 8
//             }
//         },
//         mapa: [
//             "[--------]".split(""),
//             "|E****|*J|".split(""),
//             "|--*--}**|".split(""),
//             "|********|".split(""),
//             "|*|******|".split(""),
//             "|*{*---]*|".split(""),
//             "|********|".split(""),
//             "|*-----}*|".split(""),
//             "|B******S|".split(""),
//             "{--------}".split("")
//         ]
//     },
//     {
//         id: 5,
//         label: "Nível difícil",
//         posicaoPersonagens: {
//             sherlock: {
//                 i: 1,
//                 j: 8
//             },
//             breno: {
//                 i: 1,
//                 j: 1
//             },
//             jaminha: {
//                 i: 6,
//                 j: 8
//             }
//         },
//         mapa: [
//             "[--------]".split(""),
//             "|B******S|".split(""),
//             "|*[--*-]*|".split(""),
//             "|*|******|".split(""),
//             "|*{--**|*|".split(""),
//             "|******|*|".split(""),
//             "|*|**|*|J|".split(""),
//             "|*|*-}*|*|".split(""),
//             "|******|*|".split(""),
//             "|*{----}*|".split(""),
//             "|E*******|".split(""),
//             "{--------}".split("")
//         ]
//     }
// ]

import IFase from "types/IFase";
import getPosicaoPersonagens from "util/getPosicaoPersonagens";

const fases_disponiveis = [
    {
        id: 1,
        label: "Tutorial",
        mapa: [
            "[-------]".split(""),
            "|--}S{--|".split(""),
            "|J**E**B|".split(""),
            "{-------}".split("")
        ] 
    },
    {
        id: 2,
        label: "Nível fácil",
        mapa: [
            "[-------]".split(""),
            "|*|*S***|".split(""),
            "|****|**|".split(""),
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
        label: "Nível difícil",
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
    }
] as IFase[];

fases_disponiveis.map(f => {
    f.posicaoPersonagens = getPosicaoPersonagens(f.mapa);
});

export default fases_disponiveis; 