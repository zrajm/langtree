/*-*- js-indent-level: 2; css-indent-offset: 2 -*-*/
// Data from: https://glottolog.org/glottolog/family
const treeData = { "name": "Algic", "glottolog": "algi1248", "type": "family", "children": [
  { "name": "Algonquian-Blackfoot", "glottolog": "algo1256", "type": "family", "children": [
    { "name": "Algonquian", "glottolog": "algo1257", "type": "family", "children": [
      { "name": "Arapahoic", "glottolog": "arap1273", "type": "family", "children": [
        { "name": "Arapaho-Gros Ventre-Besawunena", "glottolog": "arap1280", "type": "family", "children": [
          { "name": "Arapaho", "wiki": "Arapaho_language", "glottolog": "arap1274", "type": "language", "cas": false },
          { "name": "Gros Ventre", "wiki": "Gros_Ventre_language", "glottolog": "gros1243", "type": "language", "cas": false },
        ]},
        { "name": "Nawathinehena", "wiki": "Nawathinehena_language", "glottolog": "nawa1259", "type": "language", "cas": false }
      ]},
      { "name": "Cheyenne", "wiki": "Cheyenne_language", "glottolog": "chey1247", "type": "language", "cas": false },
      { "name": "Cree-Montagnais-Naskapi", "glottolog": "cree1271", "type": "family", "children": [
        { "name": "Atikamekw", "wiki": "Atikamekw_language", "glottolog": "atik1240", "type": "language", "cas": false },
        { "name": "Cree", "glottolog": "cree1272", "type": "family", "children": [
          { "name": "Moose Cree", "wiki": "Moose_Cree_language", "glottolog": "moos1236", "type": "language", "cas": "ᐃᓕᓖᒧᐎᓐ"  },
          { "name": "Northern East Cree", "wiki": "Northern_East_Cree_language", "glottolog": "nort1552", "type": "language", "cas": "ᐄᔨᔫ ᐊᔨᒨᓐ" },
          { "name": "Plains Creeic", "glottolog": "plai1264", "type": "family", "children": [
            { "name": "Michif", "wiki": "Michif_language", "glottolog": "mich1243", "type": "language", "cas": false },
            { "name": "Plains Cree", "wiki": "Plains_Cree_language", "glottolog": "plai1258", "type": "language", "cas": "ᓀᐦᐃᔭᐍᐏᐣ", "children": [
              // { "name": "Northern Alberta Cree", "glottolog": "nort2960", "type": "dialect" },
              // { "name": "Nuclear Plains Cree", "glottolog": "nucl1654", "type": "dialect" },
              // { "name": "Western York Cree", "glottolog": "west2629", "type": "dialect" }
            ]}
          ]},
          { "name": "Southern East Cree", "wiki": "Southern_East_Cree_language", "glottolog": "sout2978", "type": "language", "cas": "ᐄᓅ ᐊᔨᒨᓐ" },
          { "name": "Swampy Cree", "wiki": "Swampy_Cree_language", "glottolog": "swam1239", "type": "language", "cas": "ᓀᐦᐃᓇᐍᐏᐣ", "children": [
            // { "name": "Eastern Swampy Cree", "glottolog": "east2541", "type": "dialect", "cas": "ᐃᓂᓃᒧᐎᓐ" },
            // { "name": "Western Swampy Cree", "glottolog": "west2628", "type": "dialect", "cas": "ᓀᐦᐃᓇᐌᐎᐣ" }
          ]},
          { "name": "Woods Cree", "wiki": "Woods_Cree_language", "glottolog": "wood1236", "type": "language", "cas": "ᓀᐦᐃᖬᐍᐏᐣ" }
        ]},
        { "name": "Montagnais", "wiki": "Montagnais_language", "glottolog": "mont1268", "type": "language", "cas": false, "children": [
          // { "name": "Eastern Montagnais", "wiki": "Eastern_Montagnais_language", "glottolog": "east2540", "type": "dialect", "cas": false },
          // { "name": "Western Montagnais", "wiki": "Western_Montagnais_language", "glottolog": "west2627", "type": "dialect", "cas": false }
        ]},
        { "name": "Naskapi", "wiki": "Naskapi_language", "glottolog": "nask1242", "type": "language", "cas": "ᐃᔪᐤ ᐃᔨᒧᐅᓐ", "children": [
          // { "name": "Eastern Naskapi", "glottolog": "east2539", "type": "dialect" },
          // { "name": "Western Naskapi", "glottolog": "west2626", "type": "dialect" }
        ]}
      ]},
      { "name": "Eastern Algonquian", "glottolog": "east2700", "type": "family", "children": [
        { "name": "Abenaki", "glottolog": "aben1250", "type": "family", "children": [
          { "name": "Eastern Abenaki", "wiki": "Eastern_Abenaki_language", "glottolog": "east2544", "type": "language", "cas": false, "children": [
            //{ "name": "Penobscot", "glottolog": "peno1243", "type": "dialect" }
          ]},
          { "name": "Western Abenaki", "wiki": "Western_Abenaki_language", "glottolog": "west2630", "type": "language", "cas": false }
        ]},
        { "name": "Carolina Algonquian", "wiki": "Carolina_Algonquian_language", "glottolog": "caro1243", "type": "language", "cas": false },
        { "name": "Delawaran", "glottolog": "dela1253", "type": "family", "children": [
          { "name": "Common Delaware", "glottolog": "comm1246", "type": "family", "children": [
            { "name": "Munsee", "wiki": "Munsee_language", "glottolog": "muns1251", "type": "language", "cas": false },
            { "name": "Unami", "wiki": "Unami_language", "glottolog": "unam1242", "type": "language", "cas": false }
          ]},
          { "name": "Mohican", "wiki": "Mohican_language", "glottolog": "mahi1248", "type": "language", "cas": false }
        ]},
        { "name": "Malecite-Passamaquoddy", "wiki": "Malecite-Passamaquoddy_language", "glottolog": "male1292", "type": "language", "cas": false, "children": [
          // { "name": "Malecite", "glottolog": "male1293", "type": "dialect" },
          // { "name": "Passamaquoddy", "glottolog": "pass1249", "type": "dialect" }
        ]},
        { "name": "Mi’kmaq", "wiki": "Miꞌkmaq_language", "glottolog": "mikm1235", "type": "language", "cas": false, "children": [
          // { "name": "Northern Micmac", "glottolog": "nort2962", "type": "dialect" },
          // { "name": "Southern Micmac", "glottolog": "sout2979", "type": "dialect" }
        ]},
        { "name": "Nanticoke-Conoy", "glottolog": "nant1248", "type": "family", "children": [
          { "name": "Nanticoke", "wiki": "Nanticoke_language", "glottolog": "nant1249", "type": "language", "cas": false },
          { "name": "Piscataway", "wiki": "Piscataway_language", "glottolog": "pisc1239", "type": "language", "cas": false }
        ]},
        { "name": "Powhatan", "wiki": "Powhatan_language", "glottolog": "powh1243", "type": "language", "cas": false },
        { "name": "Southern New England Algonquian", "glottolog": "sout3237", "type": "family", "children": [
          { "name": "Loup A", "wiki": "Loup_language", "glottolog": "loup1243", "type": "language", "cas": false },
          { "name": "Mohegan-Montauk-Narragansett", "wiki": "Mohegan-Montauk-Narragansett_language", "glottolog": "mohe1244", "type": "language", "cas": false, "children": [
            // { "name": "Montauk", "glottolog": "mont1269", "type": "dialect" },
            // { "name": "Narrangansett", "glottolog": "narr1280", "type": "dialect" },
            // { "name": "Pequot-Mohegan", "glottolog": "pequ1242", "type": "dialect" },
            // { "name": "Stockbridge", "glottolog": "stoc1240", "type": "dialect" }
          ]},
          { "name": "Wampano", "wiki": "Wampano_language", "glottolog": "wamp1250", "type": "language", "cas": false },
          { "name": "Wampanoag", "wiki": "Wampanoag_language", "glottolog": "wamp1249", "type": "language", "cas": false }
        ]}
      ]},
      { "name": "Eastern Great Lakes Algonquian", "glottolog": "east2765", "type": "family", "children": [
        { "name": "Fox", "glottolog": "foxx1245", "type": "family", "children": [
          { "name": "Kickapoo", "wiki": "Kickapoo_language", "glottolog": "kick1244", "type": "language", "cas": false },
          { "name": "Meskwaki", "wiki": "Meskwaki_language", "glottolog": "mesk1242", "type": "language", "cas": false, "children": [
            // { "name": "Meskwakie", "glottolog": "mesk1243", "type": "dialect" },
            // { "name": "Sac", "glottolog": "sacc1239", "type": "dialect" }
          ]}
        ]},
        { "name": "Miami", "wiki": "Miami_language", "glottolog": "miam1252", "type": "language", "cas": false, "children": [
          // { "name": "Nuclear Miami", "glottolog": "nucl1653", "type": "dialect" },
          // { "name": "Peoria", "glottolog": "peor1238", "type": "dialect" }
        ]},
        { "name": "Ojibwa-Potawatomi", "glottolog": "ojib1240", "type": "family", "children": [
          { "name": "Ojibwa", "glottolog": "ojib1241", "type": "family", "children": [
            { "name": "Nuclear Ojibwe", "glottolog": "nucl1723", "type": "family", "children": [
              { "name": "Central-Eastern-Southwestern Ojibwa", "glottolog": "cent2252", "type": "family", "children": [
                { "name": "Central Ojibwa", "wiki": "Central_Ojibwa_language", "glottolog": "cent2136", "type": "language", "cas": true },
                { "name": "Chippewa", "wiki": "Chippewa_language", "glottolog": "chip1241", "type": "language", "cas": false, "children": [
                  // { "name": "Central Minnesota Chippewa", "glottolog": "cent2135", "type": "dialect" },
                  // { "name": "Minnesota Border Chippewa", "glottolog": "minn1250", "type": "dialect" },
                  // { "name": "Red Lake Chippewa", "glottolog": "redl1238", "type": "dialect" },
                  // { "name": "Turtle Mountain Chippewa", "glottolog": "turt1236", "type": "dialect" },
                  // { "name": "Upper Michigan-Wisconsin Chippewa", "glottolog": "uppe1274", "type": "dialect" }
                ]},
                { "name": "Eastern Ojibwa", "wiki": "Eastern_Ojibwa_language", "glottolog": "east2542", "type": "language", "cas": "yes?" }
              ]},
              { "name": "Northwestern-Saulteaux Ojibwa", "glottolog": "nort3181", "type": "family", "children": [
                { "name": "Northwestern Ojibwa", "wiki": "Northwestern_Ojibwa_language", "glottolog": "nort2961", "type": "language", "cas": "yes?", "children": [
                  // { "name": "Albany River Ojibwa", "glottolog": "alba1270", "type": "dialect" },
                  // { "name": "Berens River Ojibwa", "glottolog": "bere1251", "type": "dialect" },
                  // { "name": "Lac Seul Ojibwa", "glottolog": "lacs1238", "type": "dialect" },
                  // { "name": "Lake of the Woods Ojibwa", "glottolog": "lake1257", "type": "dialect" },
                  // { "name": "Rainy River Ojibwa", "glottolog": "rain1239", "type": "dialect" }
                ]},
                { "name": "Western Ojibwa", "wiki": "Western_Ojibwa_language", "glottolog": "west1510", "type": "language", "cas": "ᓇᐦᑲᐌᒧᐎᓐ" }
              ]}
            ]},
            { "name": "Ottawa", "wiki": "Ottawa_language", "glottolog": "otta1242", "type": "language", "cas": false },
            { "name": "Severn-Algonquin", "glottolog": "seve1242", "type": "family", "children": [
              { "name": "Algonquin", "wiki": "Algonquin_language", "glottolog": "algo1255", "type": "language", "cas": false, "children": [
                // { "name": "Nipissing", "glottolog": "mini1254", "type": "dialect" },
                // { "name": "Northern Algonquin", "glottolog": "nort3290", "type": "dialect" }
              ]},
              { "name": "Severn Ojibwa", "wiki": "Severn_Ojibwa_language", "glottolog": "seve1240", "type": "language", "cas": "ᐊᓂᔑᓂᓂᒧᐏᐣ", "children": [
                // { "name": "Big Trout Lake Severn Ojibwa", "glottolog": "bigt1234", "type": "dialect", "children": [
                // { "name": "Severn River Ojibwa", "glottolog": "seve1241", "type": "dialect" },
                // { "name": "Winisk River Ojibwa", "glottolog": "wini1244", "type": "dialect" }
                //]},
                //{ "name": "Deer Lake Severn Ojibwa", "glottolog": "deer1234", "type": "dialect" }
              ]}
            ]}
          ]},
          { "name": "Potawatomi", "wiki": "Potawatomi_language", "glottolog": "pota1247", "type": "language", "cas": false }
        ]},
        { "name": "Shawnee", "wiki": "Shawnee_language", "glottolog": "shaw1249", "type": "language", "cas": false }
      ]},
      { "name": "Menominee", "wiki": "Menominee_language", "glottolog": "meno1252", "type": "language", "cas": false }
    ]},
    { "name": "Siksiká (Blackfoot)", "wiki": "Blackfoot_language", "glottolog": "siks1238", "type": "language", "cas": "ᓱᖽᐧᖿ", "children": [
      // { "name": "Blood", "glottolog": "bloo1239", "type": "dialect" },
      // { "name": "Piegan", "glottolog": "pieg1239", "type": "dialect" }
    ]}
  ]},
  { "name": "Wiyot", "wiki": "Wiyot_language", "glottolog": "wiyo1248", "type": "language", "cas": false },
  { "name": "Yurok", "wiki": "Yurok_language", "glottolog": "yuro1248", "type": "language", "cas": false }
]}
