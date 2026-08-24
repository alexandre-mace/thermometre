// Généré par scripts/build-owid-data.mjs, ne pas éditer à la main.
// Source : Our World in Data, Global Carbon Budget (2025); Population based on various sources (2024) – with major processing by Our World in Data
// Données mises à jour le 2025-11-13. CC BY.

import type { OwidDataset } from "./types"

export const dataset: OwidDataset = {
  "id": "co2-explorer-per-capita",
  "kind": "multiline",
  "slug": "co-emissions-per-capita",
  "urlResolue": "https://ourworldindata.org/grapher/co-emissions-per-capita.csv",
  "titreOwid": "CO₂ emissions per capita",
  "citation": "Global Carbon Budget (2025); Population based on various sources (2024) – with major processing by Our World in Data",
  "majDonnees": "2025-11-13",
  "unite": "t/person",
  "colonnes": {
    "CO₂ emissions per capita": {
      "titre": "CO₂ emissions per capita",
      "unite": "t/person"
    }
  },
  "modes": {
    "production-par-habitant": "co-emissions-per-capita",
    "consommation-par-habitant": "consumption-co2-per-capita",
    "production-totale": "annual-co2-emissions-per-country",
    "consommation-totale": "annual-co-emissions-consumption-based",
    "cumule": "cumulative-co-emissions"
  },
  "entites": [
    {
      "nom": "Afghanistan",
      "code": "AFG"
    },
    {
      "nom": "Africa",
      "code": "OWID_AFR"
    },
    {
      "nom": "Albania",
      "code": "ALB"
    },
    {
      "nom": "Algeria",
      "code": "DZA"
    },
    {
      "nom": "Andorra",
      "code": "AND"
    },
    {
      "nom": "Angola",
      "code": "AGO"
    },
    {
      "nom": "Anguilla",
      "code": "AIA"
    },
    {
      "nom": "Antigua and Barbuda",
      "code": "ATG"
    },
    {
      "nom": "Argentina",
      "code": "ARG"
    },
    {
      "nom": "Armenia",
      "code": "ARM"
    },
    {
      "nom": "Aruba",
      "code": "ABW"
    },
    {
      "nom": "Asia",
      "code": "OWID_ASI"
    },
    {
      "nom": "Asia (excl. China and India)",
      "code": null
    },
    {
      "nom": "Australia",
      "code": "AUS"
    },
    {
      "nom": "Austria",
      "code": "AUT"
    },
    {
      "nom": "Azerbaijan",
      "code": "AZE"
    },
    {
      "nom": "Bahamas",
      "code": "BHS"
    },
    {
      "nom": "Bahrain",
      "code": "BHR"
    },
    {
      "nom": "Bangladesh",
      "code": "BGD"
    },
    {
      "nom": "Barbados",
      "code": "BRB"
    },
    {
      "nom": "Belarus",
      "code": "BLR"
    },
    {
      "nom": "Belgium",
      "code": "BEL"
    },
    {
      "nom": "Belize",
      "code": "BLZ"
    },
    {
      "nom": "Benin",
      "code": "BEN"
    },
    {
      "nom": "Bermuda",
      "code": "BMU"
    },
    {
      "nom": "Bhutan",
      "code": "BTN"
    },
    {
      "nom": "Bolivia",
      "code": "BOL"
    },
    {
      "nom": "Bonaire Sint Eustatius and Saba",
      "code": "BES"
    },
    {
      "nom": "Bosnia and Herzegovina",
      "code": "BIH"
    },
    {
      "nom": "Botswana",
      "code": "BWA"
    },
    {
      "nom": "Brazil",
      "code": "BRA"
    },
    {
      "nom": "British Virgin Islands",
      "code": "VGB"
    },
    {
      "nom": "Brunei",
      "code": "BRN"
    },
    {
      "nom": "Bulgaria",
      "code": "BGR"
    },
    {
      "nom": "Burkina Faso",
      "code": "BFA"
    },
    {
      "nom": "Burundi",
      "code": "BDI"
    },
    {
      "nom": "Cambodia",
      "code": "KHM"
    },
    {
      "nom": "Cameroon",
      "code": "CMR"
    },
    {
      "nom": "Canada",
      "code": "CAN"
    },
    {
      "nom": "Cape Verde",
      "code": "CPV"
    },
    {
      "nom": "Central African Republic",
      "code": "CAF"
    },
    {
      "nom": "Chad",
      "code": "TCD"
    },
    {
      "nom": "Chile",
      "code": "CHL"
    },
    {
      "nom": "China",
      "code": "CHN"
    },
    {
      "nom": "Colombia",
      "code": "COL"
    },
    {
      "nom": "Comoros",
      "code": "COM"
    },
    {
      "nom": "Congo",
      "code": "COG"
    },
    {
      "nom": "Cook Islands",
      "code": "COK"
    },
    {
      "nom": "Costa Rica",
      "code": "CRI"
    },
    {
      "nom": "Cote d'Ivoire",
      "code": "CIV"
    },
    {
      "nom": "Croatia",
      "code": "HRV"
    },
    {
      "nom": "Cuba",
      "code": "CUB"
    },
    {
      "nom": "Curacao",
      "code": "CUW"
    },
    {
      "nom": "Cyprus",
      "code": "CYP"
    },
    {
      "nom": "Czechia",
      "code": "CZE"
    },
    {
      "nom": "Democratic Republic of Congo",
      "code": "COD"
    },
    {
      "nom": "Denmark",
      "code": "DNK"
    },
    {
      "nom": "Djibouti",
      "code": "DJI"
    },
    {
      "nom": "Dominica",
      "code": "DMA"
    },
    {
      "nom": "Dominican Republic",
      "code": "DOM"
    },
    {
      "nom": "East Timor",
      "code": "TLS"
    },
    {
      "nom": "Ecuador",
      "code": "ECU"
    },
    {
      "nom": "Egypt",
      "code": "EGY"
    },
    {
      "nom": "El Salvador",
      "code": "SLV"
    },
    {
      "nom": "Equatorial Guinea",
      "code": "GNQ"
    },
    {
      "nom": "Eritrea",
      "code": "ERI"
    },
    {
      "nom": "Estonia",
      "code": "EST"
    },
    {
      "nom": "Eswatini",
      "code": "SWZ"
    },
    {
      "nom": "Ethiopia",
      "code": "ETH"
    },
    {
      "nom": "Europe",
      "code": "OWID_EUR"
    },
    {
      "nom": "Europe (excl. EU-27)",
      "code": null
    },
    {
      "nom": "Europe (excl. EU-28)",
      "code": null
    },
    {
      "nom": "European Union (27)",
      "code": "OWID_EU27"
    },
    {
      "nom": "European Union (28)",
      "code": null
    },
    {
      "nom": "Faroe Islands",
      "code": "FRO"
    },
    {
      "nom": "Fiji",
      "code": "FJI"
    },
    {
      "nom": "Finland",
      "code": "FIN"
    },
    {
      "nom": "France",
      "code": "FRA"
    },
    {
      "nom": "French Polynesia",
      "code": "PYF"
    },
    {
      "nom": "Gabon",
      "code": "GAB"
    },
    {
      "nom": "Gambia",
      "code": "GMB"
    },
    {
      "nom": "Georgia",
      "code": "GEO"
    },
    {
      "nom": "Germany",
      "code": "DEU"
    },
    {
      "nom": "Ghana",
      "code": "GHA"
    },
    {
      "nom": "Greece",
      "code": "GRC"
    },
    {
      "nom": "Greenland",
      "code": "GRL"
    },
    {
      "nom": "Grenada",
      "code": "GRD"
    },
    {
      "nom": "Guatemala",
      "code": "GTM"
    },
    {
      "nom": "Guinea",
      "code": "GIN"
    },
    {
      "nom": "Guinea-Bissau",
      "code": "GNB"
    },
    {
      "nom": "Guyana",
      "code": "GUY"
    },
    {
      "nom": "Haiti",
      "code": "HTI"
    },
    {
      "nom": "High-income countries",
      "code": "OWID_HIC"
    },
    {
      "nom": "Honduras",
      "code": "HND"
    },
    {
      "nom": "Hong Kong",
      "code": "HKG"
    },
    {
      "nom": "Hungary",
      "code": "HUN"
    },
    {
      "nom": "Iceland",
      "code": "ISL"
    },
    {
      "nom": "India",
      "code": "IND"
    },
    {
      "nom": "Indonesia",
      "code": "IDN"
    },
    {
      "nom": "Iran",
      "code": "IRN"
    },
    {
      "nom": "Iraq",
      "code": "IRQ"
    },
    {
      "nom": "Ireland",
      "code": "IRL"
    },
    {
      "nom": "Israel",
      "code": "ISR"
    },
    {
      "nom": "Italy",
      "code": "ITA"
    },
    {
      "nom": "Jamaica",
      "code": "JAM"
    },
    {
      "nom": "Japan",
      "code": "JPN"
    },
    {
      "nom": "Jordan",
      "code": "JOR"
    },
    {
      "nom": "Kazakhstan",
      "code": "KAZ"
    },
    {
      "nom": "Kenya",
      "code": "KEN"
    },
    {
      "nom": "Kiribati",
      "code": "KIR"
    },
    {
      "nom": "Kosovo",
      "code": "OWID_KOS"
    },
    {
      "nom": "Kuwait",
      "code": "KWT"
    },
    {
      "nom": "Kyrgyzstan",
      "code": "KGZ"
    },
    {
      "nom": "Laos",
      "code": "LAO"
    },
    {
      "nom": "Latvia",
      "code": "LVA"
    },
    {
      "nom": "Lebanon",
      "code": "LBN"
    },
    {
      "nom": "Lesotho",
      "code": "LSO"
    },
    {
      "nom": "Liberia",
      "code": "LBR"
    },
    {
      "nom": "Libya",
      "code": "LBY"
    },
    {
      "nom": "Liechtenstein",
      "code": "LIE"
    },
    {
      "nom": "Lithuania",
      "code": "LTU"
    },
    {
      "nom": "Low-income countries",
      "code": "OWID_LIC"
    },
    {
      "nom": "Lower-middle-income countries",
      "code": "OWID_LMC"
    },
    {
      "nom": "Luxembourg",
      "code": "LUX"
    },
    {
      "nom": "Macao",
      "code": "MAC"
    },
    {
      "nom": "Madagascar",
      "code": "MDG"
    },
    {
      "nom": "Malawi",
      "code": "MWI"
    },
    {
      "nom": "Malaysia",
      "code": "MYS"
    },
    {
      "nom": "Maldives",
      "code": "MDV"
    },
    {
      "nom": "Mali",
      "code": "MLI"
    },
    {
      "nom": "Malta",
      "code": "MLT"
    },
    {
      "nom": "Marshall Islands",
      "code": "MHL"
    },
    {
      "nom": "Mauritania",
      "code": "MRT"
    },
    {
      "nom": "Mauritius",
      "code": "MUS"
    },
    {
      "nom": "Mexico",
      "code": "MEX"
    },
    {
      "nom": "Micronesia (country)",
      "code": "FSM"
    },
    {
      "nom": "Moldova",
      "code": "MDA"
    },
    {
      "nom": "Mongolia",
      "code": "MNG"
    },
    {
      "nom": "Montenegro",
      "code": "MNE"
    },
    {
      "nom": "Montserrat",
      "code": "MSR"
    },
    {
      "nom": "Morocco",
      "code": "MAR"
    },
    {
      "nom": "Mozambique",
      "code": "MOZ"
    },
    {
      "nom": "Myanmar",
      "code": "MMR"
    },
    {
      "nom": "Namibia",
      "code": "NAM"
    },
    {
      "nom": "Nauru",
      "code": "NRU"
    },
    {
      "nom": "Nepal",
      "code": "NPL"
    },
    {
      "nom": "Netherlands",
      "code": "NLD"
    },
    {
      "nom": "New Caledonia",
      "code": "NCL"
    },
    {
      "nom": "New Zealand",
      "code": "NZL"
    },
    {
      "nom": "Nicaragua",
      "code": "NIC"
    },
    {
      "nom": "Niger",
      "code": "NER"
    },
    {
      "nom": "Nigeria",
      "code": "NGA"
    },
    {
      "nom": "Niue",
      "code": "NIU"
    },
    {
      "nom": "North America",
      "code": "OWID_NAM"
    },
    {
      "nom": "North America (excl. USA)",
      "code": null
    },
    {
      "nom": "North Korea",
      "code": "PRK"
    },
    {
      "nom": "North Macedonia",
      "code": "MKD"
    },
    {
      "nom": "Norway",
      "code": "NOR"
    },
    {
      "nom": "Oceania",
      "code": "OWID_OCE"
    },
    {
      "nom": "Oman",
      "code": "OMN"
    },
    {
      "nom": "Pakistan",
      "code": "PAK"
    },
    {
      "nom": "Palau",
      "code": "PLW"
    },
    {
      "nom": "Palestine",
      "code": "PSE"
    },
    {
      "nom": "Panama",
      "code": "PAN"
    },
    {
      "nom": "Papua New Guinea",
      "code": "PNG"
    },
    {
      "nom": "Paraguay",
      "code": "PRY"
    },
    {
      "nom": "Peru",
      "code": "PER"
    },
    {
      "nom": "Philippines",
      "code": "PHL"
    },
    {
      "nom": "Poland",
      "code": "POL"
    },
    {
      "nom": "Portugal",
      "code": "PRT"
    },
    {
      "nom": "Qatar",
      "code": "QAT"
    },
    {
      "nom": "Romania",
      "code": "ROU"
    },
    {
      "nom": "Russia",
      "code": "RUS"
    },
    {
      "nom": "Rwanda",
      "code": "RWA"
    },
    {
      "nom": "Saint Helena",
      "code": "SHN"
    },
    {
      "nom": "Saint Kitts and Nevis",
      "code": "KNA"
    },
    {
      "nom": "Saint Lucia",
      "code": "LCA"
    },
    {
      "nom": "Saint Pierre and Miquelon",
      "code": "SPM"
    },
    {
      "nom": "Saint Vincent and the Grenadines",
      "code": "VCT"
    },
    {
      "nom": "Samoa",
      "code": "WSM"
    },
    {
      "nom": "Sao Tome and Principe",
      "code": "STP"
    },
    {
      "nom": "Saudi Arabia",
      "code": "SAU"
    },
    {
      "nom": "Senegal",
      "code": "SEN"
    },
    {
      "nom": "Serbia",
      "code": "SRB"
    },
    {
      "nom": "Seychelles",
      "code": "SYC"
    },
    {
      "nom": "Sierra Leone",
      "code": "SLE"
    },
    {
      "nom": "Singapore",
      "code": "SGP"
    },
    {
      "nom": "Sint Maarten (Dutch part)",
      "code": "SXM"
    },
    {
      "nom": "Slovakia",
      "code": "SVK"
    },
    {
      "nom": "Slovenia",
      "code": "SVN"
    },
    {
      "nom": "Solomon Islands",
      "code": "SLB"
    },
    {
      "nom": "Somalia",
      "code": "SOM"
    },
    {
      "nom": "South Africa",
      "code": "ZAF"
    },
    {
      "nom": "South America",
      "code": "OWID_SAM"
    },
    {
      "nom": "South Korea",
      "code": "KOR"
    },
    {
      "nom": "South Sudan",
      "code": "SSD"
    },
    {
      "nom": "Spain",
      "code": "ESP"
    },
    {
      "nom": "Sri Lanka",
      "code": "LKA"
    },
    {
      "nom": "Sudan",
      "code": "SDN"
    },
    {
      "nom": "Suriname",
      "code": "SUR"
    },
    {
      "nom": "Sweden",
      "code": "SWE"
    },
    {
      "nom": "Switzerland",
      "code": "CHE"
    },
    {
      "nom": "Syria",
      "code": "SYR"
    },
    {
      "nom": "Taiwan",
      "code": "TWN"
    },
    {
      "nom": "Tajikistan",
      "code": "TJK"
    },
    {
      "nom": "Tanzania",
      "code": "TZA"
    },
    {
      "nom": "Thailand",
      "code": "THA"
    },
    {
      "nom": "Togo",
      "code": "TGO"
    },
    {
      "nom": "Tonga",
      "code": "TON"
    },
    {
      "nom": "Trinidad and Tobago",
      "code": "TTO"
    },
    {
      "nom": "Tunisia",
      "code": "TUN"
    },
    {
      "nom": "Turkey",
      "code": "TUR"
    },
    {
      "nom": "Turkmenistan",
      "code": "TKM"
    },
    {
      "nom": "Turks and Caicos Islands",
      "code": "TCA"
    },
    {
      "nom": "Tuvalu",
      "code": "TUV"
    },
    {
      "nom": "Uganda",
      "code": "UGA"
    },
    {
      "nom": "Ukraine",
      "code": "UKR"
    },
    {
      "nom": "United Arab Emirates",
      "code": "ARE"
    },
    {
      "nom": "United Kingdom",
      "code": "GBR"
    },
    {
      "nom": "United States",
      "code": "USA"
    },
    {
      "nom": "Upper-middle-income countries",
      "code": "OWID_UMC"
    },
    {
      "nom": "Uruguay",
      "code": "URY"
    },
    {
      "nom": "Uzbekistan",
      "code": "UZB"
    },
    {
      "nom": "Vanuatu",
      "code": "VUT"
    },
    {
      "nom": "Venezuela",
      "code": "VEN"
    },
    {
      "nom": "Vietnam",
      "code": "VNM"
    },
    {
      "nom": "Wallis and Futuna",
      "code": "WLF"
    },
    {
      "nom": "World",
      "code": "OWID_WRL"
    },
    {
      "nom": "Yemen",
      "code": "YEM"
    },
    {
      "nom": "Zambia",
      "code": "ZMB"
    },
    {
      "nom": "Zimbabwe",
      "code": "ZWE"
    }
  ],
  "donnees": [
    {
      "Entity": "China",
      "Code": "CHN",
      "Year": 1907,
      "CO₂ emissions per capita": 0.04840261
    },
    {
      "Entity": "China",
      "Code": "CHN",
      "Year": 1908,
      "CO₂ emissions per capita": 0.055020537
    },
    {
      "Entity": "China",
      "Code": "CHN",
      "Year": 1909,
      "CO₂ emissions per capita": 0.058310255
    },
    {
      "Entity": "China",
      "Code": "CHN",
      "Year": 1910,
      "CO₂ emissions per capita": 0.059680074
    },
    {
      "Entity": "China",
      "Code": "CHN",
      "Year": 1911,
      "CO₂ emissions per capita": 0.05827084
    },
    {
      "Entity": "China",
      "Code": "CHN",
      "Year": 1912,
      "CO₂ emissions per capita": 0.039898846
    },
    {
      "Entity": "China",
      "Code": "CHN",
      "Year": 1913,
      "CO₂ emissions per capita": 0.056213327
    },
    {
      "Entity": "China",
      "Code": "CHN",
      "Year": 1914,
      "CO₂ emissions per capita": 0.061269186
    },
    {
      "Entity": "China",
      "Code": "CHN",
      "Year": 1915,
      "CO₂ emissions per capita": 0.057669863
    },
    {
      "Entity": "China",
      "Code": "CHN",
      "Year": 1916,
      "CO₂ emissions per capita": 0.0676246
    },
    {
      "Entity": "China",
      "Code": "CHN",
      "Year": 1917,
      "CO₂ emissions per capita": 0.071104296
    },
    {
      "Entity": "China",
      "Code": "CHN",
      "Year": 1918,
      "CO₂ emissions per capita": 0.07631273
    },
    {
      "Entity": "China",
      "Code": "CHN",
      "Year": 1919,
      "CO₂ emissions per capita": 0.08266413
    },
    {
      "Entity": "China",
      "Code": "CHN",
      "Year": 1920,
      "CO₂ emissions per capita": 0.08693245
    },
    {
      "Entity": "China",
      "Code": "CHN",
      "Year": 1921,
      "CO₂ emissions per capita": 0.083120845
    },
    {
      "Entity": "China",
      "Code": "CHN",
      "Year": 1922,
      "CO₂ emissions per capita": 0.08528475
    },
    {
      "Entity": "China",
      "Code": "CHN",
      "Year": 1923,
      "CO₂ emissions per capita": 0.09890104
    },
    {
      "Entity": "China",
      "Code": "CHN",
      "Year": 1924,
      "CO₂ emissions per capita": 0.103484906
    },
    {
      "Entity": "China",
      "Code": "CHN",
      "Year": 1925,
      "CO₂ emissions per capita": 0.09701566
    },
    {
      "Entity": "China",
      "Code": "CHN",
      "Year": 1926,
      "CO₂ emissions per capita": 0.09184579
    },
    {
      "Entity": "China",
      "Code": "CHN",
      "Year": 1927,
      "CO₂ emissions per capita": 0.09602494
    },
    {
      "Entity": "China",
      "Code": "CHN",
      "Year": 1928,
      "CO₂ emissions per capita": 0.09940985
    },
    {
      "Entity": "China",
      "Code": "CHN",
      "Year": 1929,
      "CO₂ emissions per capita": 0.10044768
    },
    {
      "Entity": "China",
      "Code": "CHN",
      "Year": 1930,
      "CO₂ emissions per capita": 0.102641396
    },
    {
      "Entity": "China",
      "Code": "CHN",
      "Year": 1931,
      "CO₂ emissions per capita": 0.10696789
    },
    {
      "Entity": "China",
      "Code": "CHN",
      "Year": 1932,
      "CO₂ emissions per capita": 0.10303524
    },
    {
      "Entity": "China",
      "Code": "CHN",
      "Year": 1933,
      "CO₂ emissions per capita": 0.110256605
    },
    {
      "Entity": "China",
      "Code": "CHN",
      "Year": 1934,
      "CO₂ emissions per capita": 0.12636147
    },
    {
      "Entity": "China",
      "Code": "CHN",
      "Year": 1935,
      "CO₂ emissions per capita": 0.1462837
    },
    {
      "Entity": "China",
      "Code": "CHN",
      "Year": 1936,
      "CO₂ emissions per capita": 0.15108936
    },
    {
      "Entity": "China",
      "Code": "CHN",
      "Year": 1937,
      "CO₂ emissions per capita": 0.141227
    },
    {
      "Entity": "China",
      "Code": "CHN",
      "Year": 1938,
      "CO₂ emissions per capita": 0.12139731
    },
    {
      "Entity": "China",
      "Code": "CHN",
      "Year": 1939,
      "CO₂ emissions per capita": 0.14638789
    },
    {
      "Entity": "China",
      "Code": "CHN",
      "Year": 1940,
      "CO₂ emissions per capita": 0.17756674
    },
    {
      "Entity": "China",
      "Code": "CHN",
      "Year": 1941,
      "CO₂ emissions per capita": 0.22169025
    },
    {
      "Entity": "China",
      "Code": "CHN",
      "Year": 1942,
      "CO₂ emissions per capita": 0.24687532
    },
    {
      "Entity": "China",
      "Code": "CHN",
      "Year": 1943,
      "CO₂ emissions per capita": 0.20974888
    },
    {
      "Entity": "China",
      "Code": "CHN",
      "Year": 1944,
      "CO₂ emissions per capita": 0.19717897
    },
    {
      "Entity": "China",
      "Code": "CHN",
      "Year": 1945,
      "CO₂ emissions per capita": 0.1064322
    },
    {
      "Entity": "China",
      "Code": "CHN",
      "Year": 1946,
      "CO₂ emissions per capita": 0.06839545
    },
    {
      "Entity": "China",
      "Code": "CHN",
      "Year": 1947,
      "CO₂ emissions per capita": 0.078831576
    },
    {
      "Entity": "China",
      "Code": "CHN",
      "Year": 1948,
      "CO₂ emissions per capita": 0.07197712
    },
    {
      "Entity": "China",
      "Code": "CHN",
      "Year": 1949,
      "CO₂ emissions per capita": 0.11541034
    },
    {
      "Entity": "China",
      "Code": "CHN",
      "Year": 1950,
      "CO₂ emissions per capita": 0.14490603
    },
    {
      "Entity": "China",
      "Code": "CHN",
      "Year": 1951,
      "CO₂ emissions per capita": 0.18440396
    },
    {
      "Entity": "China",
      "Code": "CHN",
      "Year": 1952,
      "CO₂ emissions per capita": 0.22650127
    },
    {
      "Entity": "China",
      "Code": "CHN",
      "Year": 1953,
      "CO₂ emissions per capita": 0.23164201
    },
    {
      "Entity": "China",
      "Code": "CHN",
      "Year": 1954,
      "CO₂ emissions per capita": 0.2726271
    },
    {
      "Entity": "China",
      "Code": "CHN",
      "Year": 1955,
      "CO₂ emissions per capita": 0.3156697
    },
    {
      "Entity": "China",
      "Code": "CHN",
      "Year": 1956,
      "CO₂ emissions per capita": 0.35005215
    },
    {
      "Entity": "China",
      "Code": "CHN",
      "Year": 1957,
      "CO₂ emissions per capita": 0.40578437
    },
    {
      "Entity": "China",
      "Code": "CHN",
      "Year": 1958,
      "CO₂ emissions per capita": 0.8143566
    },
    {
      "Entity": "China",
      "Code": "CHN",
      "Year": 1959,
      "CO₂ emissions per capita": 1.1033454
    },
    {
      "Entity": "China",
      "Code": "CHN",
      "Year": 1960,
      "CO₂ emissions per capita": 1.2199273
    },
    {
      "Entity": "China",
      "Code": "CHN",
      "Year": 1961,
      "CO₂ emissions per capita": 0.87018025
    },
    {
      "Entity": "China",
      "Code": "CHN",
      "Year": 1962,
      "CO₂ emissions per capita": 0.69108945
    },
    {
      "Entity": "China",
      "Code": "CHN",
      "Year": 1963,
      "CO₂ emissions per capita": 0.6672778
    },
    {
      "Entity": "China",
      "Code": "CHN",
      "Year": 1964,
      "CO₂ emissions per capita": 0.65358335
    },
    {
      "Entity": "China",
      "Code": "CHN",
      "Year": 1965,
      "CO₂ emissions per capita": 0.6915715
    },
    {
      "Entity": "China",
      "Code": "CHN",
      "Year": 1966,
      "CO₂ emissions per capita": 0.74011993
    },
    {
      "Entity": "China",
      "Code": "CHN",
      "Year": 1967,
      "CO₂ emissions per capita": 0.6047536
    },
    {
      "Entity": "China",
      "Code": "CHN",
      "Year": 1968,
      "CO₂ emissions per capita": 0.63445187
    },
    {
      "Entity": "China",
      "Code": "CHN",
      "Year": 1969,
      "CO₂ emissions per capita": 0.75759107
    },
    {
      "Entity": "China",
      "Code": "CHN",
      "Year": 1970,
      "CO₂ emissions per capita": 0.9813614
    },
    {
      "Entity": "China",
      "Code": "CHN",
      "Year": 1971,
      "CO₂ emissions per capita": 1.0771737
    },
    {
      "Entity": "China",
      "Code": "CHN",
      "Year": 1972,
      "CO₂ emissions per capita": 1.1215245
    },
    {
      "Entity": "China",
      "Code": "CHN",
      "Year": 1973,
      "CO₂ emissions per capita": 1.1424145
    },
    {
      "Entity": "China",
      "Code": "CHN",
      "Year": 1974,
      "CO₂ emissions per capita": 1.1419026
    },
    {
      "Entity": "China",
      "Code": "CHN",
      "Year": 1975,
      "CO₂ emissions per capita": 1.2914877
    },
    {
      "Entity": "China",
      "Code": "CHN",
      "Year": 1976,
      "CO₂ emissions per capita": 1.3181169
    },
    {
      "Entity": "China",
      "Code": "CHN",
      "Year": 1977,
      "CO₂ emissions per capita": 1.420932
    },
    {
      "Entity": "China",
      "Code": "CHN",
      "Year": 1978,
      "CO₂ emissions per capita": 1.5609471
    },
    {
      "Entity": "China",
      "Code": "CHN",
      "Year": 1979,
      "CO₂ emissions per capita": 1.5737503
    },
    {
      "Entity": "China",
      "Code": "CHN",
      "Year": 1980,
      "CO₂ emissions per capita": 1.5198873
    },
    {
      "Entity": "China",
      "Code": "CHN",
      "Year": 1981,
      "CO₂ emissions per capita": 1.479652
    },
    {
      "Entity": "China",
      "Code": "CHN",
      "Year": 1982,
      "CO₂ emissions per capita": 1.5847058
    },
    {
      "Entity": "China",
      "Code": "CHN",
      "Year": 1983,
      "CO₂ emissions per capita": 1.6459085
    },
    {
      "Entity": "China",
      "Code": "CHN",
      "Year": 1984,
      "CO₂ emissions per capita": 1.7667418
    },
    {
      "Entity": "China",
      "Code": "CHN",
      "Year": 1985,
      "CO₂ emissions per capita": 1.8844863
    },
    {
      "Entity": "China",
      "Code": "CHN",
      "Year": 1986,
      "CO₂ emissions per capita": 1.9526218
    },
    {
      "Entity": "China",
      "Code": "CHN",
      "Year": 1987,
      "CO₂ emissions per capita": 2.0585601
    },
    {
      "Entity": "China",
      "Code": "CHN",
      "Year": 1988,
      "CO₂ emissions per capita": 2.1739132
    },
    {
      "Entity": "China",
      "Code": "CHN",
      "Year": 1989,
      "CO₂ emissions per capita": 2.1712253
    },
    {
      "Entity": "China",
      "Code": "CHN",
      "Year": 1990,
      "CO₂ emissions per capita": 2.1528878
    },
    {
      "Entity": "China",
      "Code": "CHN",
      "Year": 1991,
      "CO₂ emissions per capita": 2.2370765
    },
    {
      "Entity": "China",
      "Code": "CHN",
      "Year": 1992,
      "CO₂ emissions per capita": 2.3057148
    },
    {
      "Entity": "China",
      "Code": "CHN",
      "Year": 1993,
      "CO₂ emissions per capita": 2.4340296
    },
    {
      "Entity": "China",
      "Code": "CHN",
      "Year": 1994,
      "CO₂ emissions per capita": 2.559043
    },
    {
      "Entity": "China",
      "Code": "CHN",
      "Year": 1995,
      "CO₂ emissions per capita": 2.7465813
    },
    {
      "Entity": "China",
      "Code": "CHN",
      "Year": 1996,
      "CO₂ emissions per capita": 2.8427844
    },
    {
      "Entity": "China",
      "Code": "CHN",
      "Year": 1997,
      "CO₂ emissions per capita": 2.8299394
    },
    {
      "Entity": "China",
      "Code": "CHN",
      "Year": 1998,
      "CO₂ emissions per capita": 2.6824508
    },
    {
      "Entity": "China",
      "Code": "CHN",
      "Year": 1999,
      "CO₂ emissions per capita": 2.817025
    },
    {
      "Entity": "China",
      "Code": "CHN",
      "Year": 2000,
      "CO₂ emissions per capita": 2.8700879
    },
    {
      "Entity": "China",
      "Code": "CHN",
      "Year": 2001,
      "CO₂ emissions per capita": 2.912365
    },
    {
      "Entity": "China",
      "Code": "CHN",
      "Year": 2002,
      "CO₂ emissions per capita": 3.184619
    },
    {
      "Entity": "China",
      "Code": "CHN",
      "Year": 2003,
      "CO₂ emissions per capita": 3.7351773
    },
    {
      "Entity": "China",
      "Code": "CHN",
      "Year": 2004,
      "CO₂ emissions per capita": 4.001966
    },
    {
      "Entity": "China",
      "Code": "CHN",
      "Year": 2005,
      "CO₂ emissions per capita": 4.4899764
    },
    {
      "Entity": "China",
      "Code": "CHN",
      "Year": 2006,
      "CO₂ emissions per capita": 4.921031
    },
    {
      "Entity": "China",
      "Code": "CHN",
      "Year": 2007,
      "CO₂ emissions per capita": 5.2606664
    },
    {
      "Entity": "China",
      "Code": "CHN",
      "Year": 2008,
      "CO₂ emissions per capita": 5.6172485
    },
    {
      "Entity": "China",
      "Code": "CHN",
      "Year": 2009,
      "CO₂ emissions per capita": 5.8706574
    },
    {
      "Entity": "China",
      "Code": "CHN",
      "Year": 2010,
      "CO₂ emissions per capita": 6.370445
    },
    {
      "Entity": "China",
      "Code": "CHN",
      "Year": 2011,
      "CO₂ emissions per capita": 6.998823
    },
    {
      "Entity": "China",
      "Code": "CHN",
      "Year": 2012,
      "CO₂ emissions per capita": 7.131918
    },
    {
      "Entity": "China",
      "Code": "CHN",
      "Year": 2013,
      "CO₂ emissions per capita": 7.2097993
    },
    {
      "Entity": "China",
      "Code": "CHN",
      "Year": 2014,
      "CO₂ emissions per capita": 7.187588
    },
    {
      "Entity": "China",
      "Code": "CHN",
      "Year": 2015,
      "CO₂ emissions per capita": 7.0609546
    },
    {
      "Entity": "China",
      "Code": "CHN",
      "Year": 2016,
      "CO₂ emissions per capita": 6.9428844
    },
    {
      "Entity": "China",
      "Code": "CHN",
      "Year": 2017,
      "CO₂ emissions per capita": 7.080384
    },
    {
      "Entity": "China",
      "Code": "CHN",
      "Year": 2018,
      "CO₂ emissions per capita": 7.2915606
    },
    {
      "Entity": "China",
      "Code": "CHN",
      "Year": 2019,
      "CO₂ emissions per capita": 7.5260706
    },
    {
      "Entity": "China",
      "Code": "CHN",
      "Year": 2020,
      "CO₂ emissions per capita": 7.64075
    },
    {
      "Entity": "China",
      "Code": "CHN",
      "Year": 2021,
      "CO₂ emissions per capita": 7.910899
    },
    {
      "Entity": "China",
      "Code": "CHN",
      "Year": 2022,
      "CO₂ emissions per capita": 8.217776
    },
    {
      "Entity": "China",
      "Code": "CHN",
      "Year": 2023,
      "CO₂ emissions per capita": 8.556261
    },
    {
      "Entity": "China",
      "Code": "CHN",
      "Year": 2024,
      "CO₂ emissions per capita": 8.65839
    },
    {
      "Entity": "India",
      "Code": "IND",
      "Year": 1858,
      "CO₂ emissions per capita": 0.0016306057
    },
    {
      "Entity": "India",
      "Code": "IND",
      "Year": 1859,
      "CO₂ emissions per capita": 0.002622483
    },
    {
      "Entity": "India",
      "Code": "IND",
      "Year": 1860,
      "CO₂ emissions per capita": 0.002641329
    },
    {
      "Entity": "India",
      "Code": "IND",
      "Year": 1861,
      "CO₂ emissions per capita": 0.002035734
    },
    {
      "Entity": "India",
      "Code": "IND",
      "Year": 1862,
      "CO₂ emissions per capita": 0.0022456788
    },
    {
      "Entity": "India",
      "Code": "IND",
      "Year": 1863,
      "CO₂ emissions per capita": 0.0024812266
    },
    {
      "Entity": "India",
      "Code": "IND",
      "Year": 1864,
      "CO₂ emissions per capita": 0.0023388793
    },
    {
      "Entity": "India",
      "Code": "IND",
      "Year": 1865,
      "CO₂ emissions per capita": 0.0022912056
    },
    {
      "Entity": "India",
      "Code": "IND",
      "Year": 1866,
      "CO₂ emissions per capita": 0.002577713
    },
    {
      "Entity": "India",
      "Code": "IND",
      "Year": 1878,
      "CO₂ emissions per capita": 0.0069540306
    },
    {
      "Entity": "India",
      "Code": "IND",
      "Year": 1879,
      "CO₂ emissions per capita": 0.006611514
    },
    {
      "Entity": "India",
      "Code": "IND",
      "Year": 1880,
      "CO₂ emissions per capita": 0.0073761567
    },
    {
      "Entity": "India",
      "Code": "IND",
      "Year": 1881,
      "CO₂ emissions per capita": 0.007152133
    },
    {
      "Entity": "India",
      "Code": "IND",
      "Year": 1882,
      "CO₂ emissions per capita": 0.008482991
    },
    {
      "Entity": "India",
      "Code": "IND",
      "Year": 1883,
      "CO₂ emissions per capita": 0.009352291
    },
    {
      "Entity": "India",
      "Code": "IND",
      "Year": 1884,
      "CO₂ emissions per capita": 0.010376249
    },
    {
      "Entity": "India",
      "Code": "IND",
      "Year": 1885,
      "CO₂ emissions per capita": 0.009272857
    },
    {
      "Entity": "India",
      "Code": "IND",
      "Year": 1886,
      "CO₂ emissions per capita": 0.01036802
    },
    {
      "Entity": "India",
      "Code": "IND",
      "Year": 1887,
      "CO₂ emissions per capita": 0.011375645
    },
    {
      "Entity": "India",
      "Code": "IND",
      "Year": 1888,
      "CO₂ emissions per capita": 0.01254896
    },
    {
      "Entity": "India",
      "Code": "IND",
      "Year": 1889,
      "CO₂ emissions per capita": 0.014703709
    },
    {
      "Entity": "India",
      "Code": "IND",
      "Year": 1890,
      "CO₂ emissions per capita": 0.016115412
    },
    {
      "Entity": "India",
      "Code": "IND",
      "Year": 1891,
      "CO₂ emissions per capita": 0.017284516
    },
    {
      "Entity": "India",
      "Code": "IND",
      "Year": 1892,
      "CO₂ emissions per capita": 0.018952666
    },
    {
      "Entity": "India",
      "Code": "IND",
      "Year": 1893,
      "CO₂ emissions per capita": 0.019993288
    },
    {
      "Entity": "India",
      "Code": "IND",
      "Year": 1894,
      "CO₂ emissions per capita": 0.020229945
    },
    {
      "Entity": "India",
      "Code": "IND",
      "Year": 1895,
      "CO₂ emissions per capita": 0.025301605
    },
    {
      "Entity": "India",
      "Code": "IND",
      "Year": 1896,
      "CO₂ emissions per capita": 0.02732521
    },
    {
      "Entity": "India",
      "Code": "IND",
      "Year": 1897,
      "CO₂ emissions per capita": 0.029601408
    },
    {
      "Entity": "India",
      "Code": "IND",
      "Year": 1898,
      "CO₂ emissions per capita": 0.032682236
    },
    {
      "Entity": "India",
      "Code": "IND",
      "Year": 1899,
      "CO₂ emissions per capita": 0.035929054
    },
    {
      "Entity": "India",
      "Code": "IND",
      "Year": 1900,
      "CO₂ emissions per capita": 0.042496547
    },
    {
      "Entity": "India",
      "Code": "IND",
      "Year": 1901,
      "CO₂ emissions per capita": 0.04676327
    },
    {
      "Entity": "India",
      "Code": "IND",
      "Year": 1902,
      "CO₂ emissions per capita": 0.05125429
    },
    {
      "Entity": "India",
      "Code": "IND",
      "Year": 1903,
      "CO₂ emissions per capita": 0.05197061
    },
    {
      "Entity": "India",
      "Code": "IND",
      "Year": 1904,
      "CO₂ emissions per capita": 0.05781677
    },
    {
      "Entity": "India",
      "Code": "IND",
      "Year": 1905,
      "CO₂ emissions per capita": 0.058772717
    },
    {
      "Entity": "India",
      "Code": "IND",
      "Year": 1906,
      "CO₂ emissions per capita": 0.06747881
    },
    {
      "Entity": "India",
      "Code": "IND",
      "Year": 1907,
      "CO₂ emissions per capita": 0.07472625
    },
    {
      "Entity": "India",
      "Code": "IND",
      "Year": 1908,
      "CO₂ emissions per capita": 0.08500477
    },
    {
      "Entity": "India",
      "Code": "IND",
      "Year": 1909,
      "CO₂ emissions per capita": 0.08200578
    },
    {
      "Entity": "India",
      "Code": "IND",
      "Year": 1910,
      "CO₂ emissions per capita": 0.07948293
    },
    {
      "Entity": "India",
      "Code": "IND",
      "Year": 1911,
      "CO₂ emissions per capita": 0.08363459
    },
    {
      "Entity": "India",
      "Code": "IND",
      "Year": 1912,
      "CO₂ emissions per capita": 0.09608021
    },
    {
      "Entity": "India",
      "Code": "IND",
      "Year": 1913,
      "CO₂ emissions per capita": 0.10591431
    },
    {
      "Entity": "India",
      "Code": "IND",
      "Year": 1914,
      "CO₂ emissions per capita": 0.10660476
    },
    {
      "Entity": "India",
      "Code": "IND",
      "Year": 1915,
      "CO₂ emissions per capita": 0.11136742
    },
    {
      "Entity": "India",
      "Code": "IND",
      "Year": 1916,
      "CO₂ emissions per capita": 0.11253696
    },
    {
      "Entity": "India",
      "Code": "IND",
      "Year": 1917,
      "CO₂ emissions per capita": 0.117483534
    },
    {
      "Entity": "India",
      "Code": "IND",
      "Year": 1918,
      "CO₂ emissions per capita": 0.13188972
    },
    {
      "Entity": "India",
      "Code": "IND",
      "Year": 1919,
      "CO₂ emissions per capita": 0.14359471
    },
    {
      "Entity": "India",
      "Code": "IND",
      "Year": 1920,
      "CO₂ emissions per capita": 0.115977466
    },
    {
      "Entity": "India",
      "Code": "IND",
      "Year": 1921,
      "CO₂ emissions per capita": 0.1239727
    },
    {
      "Entity": "India",
      "Code": "IND",
      "Year": 1922,
      "CO₂ emissions per capita": 0.12101775
    },
    {
      "Entity": "India",
      "Code": "IND",
      "Year": 1923,
      "CO₂ emissions per capita": 0.12333176
    },
    {
      "Entity": "India",
      "Code": "IND",
      "Year": 1924,
      "CO₂ emissions per capita": 0.13069753
    },
    {
      "Entity": "India",
      "Code": "IND",
      "Year": 1925,
      "CO₂ emissions per capita": 0.12771833
    },
    {
      "Entity": "India",
      "Code": "IND",
      "Year": 1926,
      "CO₂ emissions per capita": 0.12604858
    },
    {
      "Entity": "India",
      "Code": "IND",
      "Year": 1927,
      "CO₂ emissions per capita": 0.13091141
    },
    {
      "Entity": "India",
      "Code": "IND",
      "Year": 1928,
      "CO₂ emissions per capita": 0.124054424
    },
    {
      "Entity": "India",
      "Code": "IND",
      "Year": 1929,
      "CO₂ emissions per capita": 0.12776801
    },
    {
      "Entity": "India",
      "Code": "IND",
      "Year": 1930,
      "CO₂ emissions per capita": 0.12841757
    },
    {
      "Entity": "India",
      "Code": "IND",
      "Year": 1931,
      "CO₂ emissions per capita": 0.116237566
    },
    {
      "Entity": "India",
      "Code": "IND",
      "Year": 1932,
      "CO₂ emissions per capita": 0.106686965
    },
    {
      "Entity": "India",
      "Code": "IND",
      "Year": 1933,
      "CO₂ emissions per capita": 0.10327977
    },
    {
      "Entity": "India",
      "Code": "IND",
      "Year": 1934,
      "CO₂ emissions per capita": 0.11374695
    },
    {
      "Entity": "India",
      "Code": "IND",
      "Year": 1935,
      "CO₂ emissions per capita": 0.11721672
    },
    {
      "Entity": "India",
      "Code": "IND",
      "Year": 1936,
      "CO₂ emissions per capita": 0.11361255
    },
    {
      "Entity": "India",
      "Code": "IND",
      "Year": 1937,
      "CO₂ emissions per capita": 0.12410688
    },
    {
      "Entity": "India",
      "Code": "IND",
      "Year": 1938,
      "CO₂ emissions per capita": 0.13681275
    },
    {
      "Entity": "India",
      "Code": "IND",
      "Year": 1939,
      "CO₂ emissions per capita": 0.1326354
    },
    {
      "Entity": "India",
      "Code": "IND",
      "Year": 1940,
      "CO₂ emissions per capita": 0.1399502
    },
    {
      "Entity": "India",
      "Code": "IND",
      "Year": 1941,
      "CO₂ emissions per capita": 0.14319538
    },
    {
      "Entity": "India",
      "Code": "IND",
      "Year": 1942,
      "CO₂ emissions per capita": 0.14350855
    },
    {
      "Entity": "India",
      "Code": "IND",
      "Year": 1943,
      "CO₂ emissions per capita": 0.1259863
    },
    {
      "Entity": "India",
      "Code": "IND",
      "Year": 1944,
      "CO₂ emissions per capita": 0.129791
    },
    {
      "Entity": "India",
      "Code": "IND",
      "Year": 1945,
      "CO₂ emissions per capita": 0.14495872
    },
    {
      "Entity": "India",
      "Code": "IND",
      "Year": 1946,
      "CO₂ emissions per capita": 0.14425123
    },
    {
      "Entity": "India",
      "Code": "IND",
      "Year": 1947,
      "CO₂ emissions per capita": 0.14798945
    },
    {
      "Entity": "India",
      "Code": "IND",
      "Year": 1948,
      "CO₂ emissions per capita": 0.14916411
    },
    {
      "Entity": "India",
      "Code": "IND",
      "Year": 1949,
      "CO₂ emissions per capita": 0.15787567
    },
    {
      "Entity": "India",
      "Code": "IND",
      "Year": 1950,
      "CO₂ emissions per capita": 0.17599274
    },
    {
      "Entity": "India",
      "Code": "IND",
      "Year": 1951,
      "CO₂ emissions per capita": 0.18030834
    },
    {
      "Entity": "India",
      "Code": "IND",
      "Year": 1952,
      "CO₂ emissions per capita": 0.18583614
    },
    {
      "Entity": "India",
      "Code": "IND",
      "Year": 1953,
      "CO₂ emissions per capita": 0.18537368
    },
    {
      "Entity": "India",
      "Code": "IND",
      "Year": 1954,
      "CO₂ emissions per capita": 0.19094001
    },
    {
      "Entity": "India",
      "Code": "IND",
      "Year": 1955,
      "CO₂ emissions per capita": 0.20297568
    },
    {
      "Entity": "India",
      "Code": "IND",
      "Year": 1956,
      "CO₂ emissions per capita": 0.20559466
    },
    {
      "Entity": "India",
      "Code": "IND",
      "Year": 1957,
      "CO₂ emissions per capita": 0.22551806
    },
    {
      "Entity": "India",
      "Code": "IND",
      "Year": 1958,
      "CO₂ emissions per capita": 0.23041473
    },
    {
      "Entity": "India",
      "Code": "IND",
      "Year": 1959,
      "CO₂ emissions per capita": 0.23823537
    },
    {
      "Entity": "India",
      "Code": "IND",
      "Year": 1960,
      "CO₂ emissions per capita": 0.25532722
    },
    {
      "Entity": "India",
      "Code": "IND",
      "Year": 1961,
      "CO₂ emissions per capita": 0.26961234
    },
    {
      "Entity": "India",
      "Code": "IND",
      "Year": 1962,
      "CO₂ emissions per capita": 0.2899293
    },
    {
      "Entity": "India",
      "Code": "IND",
      "Year": 1963,
      "CO₂ emissions per capita": 0.30426666
    },
    {
      "Entity": "India",
      "Code": "IND",
      "Year": 1964,
      "CO₂ emissions per capita": 0.29105714
    },
    {
      "Entity": "India",
      "Code": "IND",
      "Year": 1965,
      "CO₂ emissions per capita": 0.31357706
    },
    {
      "Entity": "India",
      "Code": "IND",
      "Year": 1966,
      "CO₂ emissions per capita": 0.31827164
    },
    {
      "Entity": "India",
      "Code": "IND",
      "Year": 1967,
      "CO₂ emissions per capita": 0.31187475
    },
    {
      "Entity": "India",
      "Code": "IND",
      "Year": 1968,
      "CO₂ emissions per capita": 0.33301112
    },
    {
      "Entity": "India",
      "Code": "IND",
      "Year": 1969,
      "CO₂ emissions per capita": 0.33230522
    },
    {
      "Entity": "India",
      "Code": "IND",
      "Year": 1970,
      "CO₂ emissions per capita": 0.33291033
    },
    {
      "Entity": "India",
      "Code": "IND",
      "Year": 1971,
      "CO₂ emissions per capita": 0.34396365
    },
    {
      "Entity": "India",
      "Code": "IND",
      "Year": 1972,
      "CO₂ emissions per capita": 0.35590428
    },
    {
      "Entity": "India",
      "Code": "IND",
      "Year": 1973,
      "CO₂ emissions per capita": 0.35836908
    },
    {
      "Entity": "India",
      "Code": "IND",
      "Year": 1974,
      "CO₂ emissions per capita": 0.3615395
    },
    {
      "Entity": "India",
      "Code": "IND",
      "Year": 1975,
      "CO₂ emissions per capita": 0.38312787
    },
    {
      "Entity": "India",
      "Code": "IND",
      "Year": 1976,
      "CO₂ emissions per capita": 0.39106047
    },
    {
      "Entity": "India",
      "Code": "IND",
      "Year": 1977,
      "CO₂ emissions per capita": 0.40412238
    },
    {
      "Entity": "India",
      "Code": "IND",
      "Year": 1978,
      "CO₂ emissions per capita": 0.40130946
    },
    {
      "Entity": "India",
      "Code": "IND",
      "Year": 1979,
      "CO₂ emissions per capita": 0.41165555
    },
    {
      "Entity": "India",
      "Code": "IND",
      "Year": 1980,
      "CO₂ emissions per capita": 0.424402
    },
    {
      "Entity": "India",
      "Code": "IND",
      "Year": 1981,
      "CO₂ emissions per capita": 0.44759268
    },
    {
      "Entity": "India",
      "Code": "IND",
      "Year": 1982,
      "CO₂ emissions per capita": 0.45172426
    },
    {
      "Entity": "India",
      "Code": "IND",
      "Year": 1983,
      "CO₂ emissions per capita": 0.47764838
    },
    {
      "Entity": "India",
      "Code": "IND",
      "Year": 1984,
      "CO₂ emissions per capita": 0.4789781
    },
    {
      "Entity": "India",
      "Code": "IND",
      "Year": 1985,
      "CO₂ emissions per capita": 0.51459557
    },
    {
      "Entity": "India",
      "Code": "IND",
      "Year": 1986,
      "CO₂ emissions per capita": 0.5391722
    },
    {
      "Entity": "India",
      "Code": "IND",
      "Year": 1987,
      "CO₂ emissions per capita": 0.562909
    },
    {
      "Entity": "India",
      "Code": "IND",
      "Year": 1988,
      "CO₂ emissions per capita": 0.59431225
    },
    {
      "Entity": "India",
      "Code": "IND",
      "Year": 1989,
      "CO₂ emissions per capita": 0.63905036
    },
    {
      "Entity": "India",
      "Code": "IND",
      "Year": 1990,
      "CO₂ emissions per capita": 0.668214
    },
    {
      "Entity": "India",
      "Code": "IND",
      "Year": 1991,
      "CO₂ emissions per capita": 0.69619745
    },
    {
      "Entity": "India",
      "Code": "IND",
      "Year": 1992,
      "CO₂ emissions per capita": 0.72586346
    },
    {
      "Entity": "India",
      "Code": "IND",
      "Year": 1993,
      "CO₂ emissions per capita": 0.7344633
    },
    {
      "Entity": "India",
      "Code": "IND",
      "Year": 1994,
      "CO₂ emissions per capita": 0.7586807
    },
    {
      "Entity": "India",
      "Code": "IND",
      "Year": 1995,
      "CO₂ emissions per capita": 0.7919185
    },
    {
      "Entity": "India",
      "Code": "IND",
      "Year": 1996,
      "CO₂ emissions per capita": 0.8406862
    },
    {
      "Entity": "India",
      "Code": "IND",
      "Year": 1997,
      "CO₂ emissions per capita": 0.8587196
    },
    {
      "Entity": "India",
      "Code": "IND",
      "Year": 1998,
      "CO₂ emissions per capita": 0.8597363
    },
    {
      "Entity": "India",
      "Code": "IND",
      "Year": 1999,
      "CO₂ emissions per capita": 0.92580426
    },
    {
      "Entity": "India",
      "Code": "IND",
      "Year": 2000,
      "CO₂ emissions per capita": 0.9330219
    },
    {
      "Entity": "India",
      "Code": "IND",
      "Year": 2001,
      "CO₂ emissions per capita": 0.92884284
    },
    {
      "Entity": "India",
      "Code": "IND",
      "Year": 2002,
      "CO₂ emissions per capita": 0.94091654
    },
    {
      "Entity": "India",
      "Code": "IND",
      "Year": 2003,
      "CO₂ emissions per capita": 0.95665747
    },
    {
      "Entity": "India",
      "Code": "IND",
      "Year": 2004,
      "CO₂ emissions per capita": 0.9987847
    },
    {
      "Entity": "India",
      "Code": "IND",
      "Year": 2005,
      "CO₂ emissions per capita": 1.0352627
    },
    {
      "Entity": "India",
      "Code": "IND",
      "Year": 2006,
      "CO₂ emissions per capita": 1.1026897
    },
    {
      "Entity": "India",
      "Code": "IND",
      "Year": 2007,
      "CO₂ emissions per capita": 1.1703311
    },
    {
      "Entity": "India",
      "Code": "IND",
      "Year": 2008,
      "CO₂ emissions per capita": 1.2338176
    },
    {
      "Entity": "India",
      "Code": "IND",
      "Year": 2009,
      "CO₂ emissions per capita": 1.3164382
    },
    {
      "Entity": "India",
      "Code": "IND",
      "Year": 2010,
      "CO₂ emissions per capita": 1.3498628
    },
    {
      "Entity": "India",
      "Code": "IND",
      "Year": 2011,
      "CO₂ emissions per capita": 1.3999841
    },
    {
      "Entity": "India",
      "Code": "IND",
      "Year": 2012,
      "CO₂ emissions per capita": 1.5070187
    },
    {
      "Entity": "India",
      "Code": "IND",
      "Year": 2013,
      "CO₂ emissions per capita": 1.5398146
    },
    {
      "Entity": "India",
      "Code": "IND",
      "Year": 2014,
      "CO₂ emissions per capita": 1.6368889
    },
    {
      "Entity": "India",
      "Code": "IND",
      "Year": 2015,
      "CO₂ emissions per capita": 1.6805544
    },
    {
      "Entity": "India",
      "Code": "IND",
      "Year": 2016,
      "CO₂ emissions per capita": 1.7504745
    },
    {
      "Entity": "India",
      "Code": "IND",
      "Year": 2017,
      "CO₂ emissions per capita": 1.7840685
    },
    {
      "Entity": "India",
      "Code": "IND",
      "Year": 2018,
      "CO₂ emissions per capita": 1.8879061
    },
    {
      "Entity": "India",
      "Code": "IND",
      "Year": 2019,
      "CO₂ emissions per capita": 1.8798543
    },
    {
      "Entity": "India",
      "Code": "IND",
      "Year": 2020,
      "CO₂ emissions per capita": 1.7272933
    },
    {
      "Entity": "India",
      "Code": "IND",
      "Year": 2021,
      "CO₂ emissions per capita": 1.8920738
    },
    {
      "Entity": "India",
      "Code": "IND",
      "Year": 2022,
      "CO₂ emissions per capita": 1.9861692
    },
    {
      "Entity": "India",
      "Code": "IND",
      "Year": 2023,
      "CO₂ emissions per capita": 2.1297693
    },
    {
      "Entity": "India",
      "Code": "IND",
      "Year": 2024,
      "CO₂ emissions per capita": 2.2009783
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1750,
      "CO₂ emissions per capita": 1.0019121
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1760,
      "CO₂ emissions per capita": 1.070363
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1770,
      "CO₂ emissions per capita": 1.2627987
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1780,
      "CO₂ emissions per capita": 1.4520383
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1790,
      "CO₂ emissions per capita": 1.7707893
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1800,
      "CO₂ emissions per capita": 2.9153564
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1801,
      "CO₂ emissions per capita": 2.8286498
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1802,
      "CO₂ emissions per capita": 2.7656965
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1803,
      "CO₂ emissions per capita": 2.5437405
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1804,
      "CO₂ emissions per capita": 2.4763212
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1805,
      "CO₂ emissions per capita": 2.5825114
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1806,
      "CO₂ emissions per capita": 2.695625
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1807,
      "CO₂ emissions per capita": 2.811327
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1808,
      "CO₂ emissions per capita": 2.8766963
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1809,
      "CO₂ emissions per capita": 2.915259
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1810,
      "CO₂ emissions per capita": 2.8722124
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1811,
      "CO₂ emissions per capita": 2.8188872
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1812,
      "CO₂ emissions per capita": 2.7279038
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1813,
      "CO₂ emissions per capita": 2.6192143
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1814,
      "CO₂ emissions per capita": 2.5276635
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1815,
      "CO₂ emissions per capita": 2.4391406
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1816,
      "CO₂ emissions per capita": 2.3177464
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1817,
      "CO₂ emissions per capita": 2.3279696
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1818,
      "CO₂ emissions per capita": 2.303634
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1819,
      "CO₂ emissions per capita": 2.1739373
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1820,
      "CO₂ emissions per capita": 2.0557053
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1821,
      "CO₂ emissions per capita": 2.0387487
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1822,
      "CO₂ emissions per capita": 2.0682518
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1823,
      "CO₂ emissions per capita": 2.1145442
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1824,
      "CO₂ emissions per capita": 2.1529691
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1825,
      "CO₂ emissions per capita": 2.1886015
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1826,
      "CO₂ emissions per capita": 2.1842163
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1827,
      "CO₂ emissions per capita": 2.2401965
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1828,
      "CO₂ emissions per capita": 2.2364638
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1829,
      "CO₂ emissions per capita": 2.234891
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1830,
      "CO₂ emissions per capita": 2.8095102
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1831,
      "CO₂ emissions per capita": 2.6452432
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1832,
      "CO₂ emissions per capita": 2.5387402
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1833,
      "CO₂ emissions per capita": 2.4873807
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1834,
      "CO₂ emissions per capita": 2.6161683
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1835,
      "CO₂ emissions per capita": 2.8411562
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1836,
      "CO₂ emissions per capita": 3.0594063
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1837,
      "CO₂ emissions per capita": 2.9013233
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1838,
      "CO₂ emissions per capita": 2.8080924
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1839,
      "CO₂ emissions per capita": 2.8675888
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1840,
      "CO₂ emissions per capita": 3.0363529
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1841,
      "CO₂ emissions per capita": 3.0412488
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1842,
      "CO₂ emissions per capita": 3.1750915
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1843,
      "CO₂ emissions per capita": 3.2955952
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1844,
      "CO₂ emissions per capita": 3.490339
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1845,
      "CO₂ emissions per capita": 3.7006795
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1846,
      "CO₂ emissions per capita": 3.5360403
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1847,
      "CO₂ emissions per capita": 3.7643142
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1848,
      "CO₂ emissions per capita": 4.0223227
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1849,
      "CO₂ emissions per capita": 4.3204474
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1850,
      "CO₂ emissions per capita": 4.489172
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1851,
      "CO₂ emissions per capita": 4.252994
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1852,
      "CO₂ emissions per capita": 4.2159934
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1853,
      "CO₂ emissions per capita": 4.167399
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1854,
      "CO₂ emissions per capita": 4.9915624
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1855,
      "CO₂ emissions per capita": 4.6457763
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1856,
      "CO₂ emissions per capita": 4.969304
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1857,
      "CO₂ emissions per capita": 4.8508296
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1858,
      "CO₂ emissions per capita": 4.7254786
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1859,
      "CO₂ emissions per capita": 5.21251
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1860,
      "CO₂ emissions per capita": 5.8072352
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1861,
      "CO₂ emissions per capita": 6.007872
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1862,
      "CO₂ emissions per capita": 5.7708826
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1863,
      "CO₂ emissions per capita": 6.086277
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1864,
      "CO₂ emissions per capita": 6.4942226
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1865,
      "CO₂ emissions per capita": 6.8250237
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1866,
      "CO₂ emissions per capita": 6.974182
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1867,
      "CO₂ emissions per capita": 7.1007743
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1868,
      "CO₂ emissions per capita": 6.907395
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1869,
      "CO₂ emissions per capita": 7.185026
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1870,
      "CO₂ emissions per capita": 7.273863
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1871,
      "CO₂ emissions per capita": 7.6345577
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1872,
      "CO₂ emissions per capita": 7.967353
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1873,
      "CO₂ emissions per capita": 8.189286
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1874,
      "CO₂ emissions per capita": 7.8809423
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1875,
      "CO₂ emissions per capita": 8.238478
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1876,
      "CO₂ emissions per capita": 8.144492
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1877,
      "CO₂ emissions per capita": 8.210754
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1878,
      "CO₂ emissions per capita": 7.9860015
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1879,
      "CO₂ emissions per capita": 7.9602866
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1880,
      "CO₂ emissions per capita": 8.59724
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1881,
      "CO₂ emissions per capita": 8.958958
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1882,
      "CO₂ emissions per capita": 8.960591
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1883,
      "CO₂ emissions per capita": 9.250244
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1884,
      "CO₂ emissions per capita": 8.935579
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1885,
      "CO₂ emissions per capita": 8.759362
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1886,
      "CO₂ emissions per capita": 8.611424
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1887,
      "CO₂ emissions per capita": 8.762649
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1888,
      "CO₂ emissions per capita": 9.038788
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1889,
      "CO₂ emissions per capita": 9.284015
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1890,
      "CO₂ emissions per capita": 9.419005
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1891,
      "CO₂ emissions per capita": 9.533845
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1892,
      "CO₂ emissions per capita": 9.25243
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1893,
      "CO₂ emissions per capita": 8.21112
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1894,
      "CO₂ emissions per capita": 9.315627
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1895,
      "CO₂ emissions per capita": 9.317141
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1896,
      "CO₂ emissions per capita": 9.494172
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1897,
      "CO₂ emissions per capita": 9.656031
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1898,
      "CO₂ emissions per capita": 9.589032
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1899,
      "CO₂ emissions per capita": 10.180933
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1900,
      "CO₂ emissions per capita": 10.215249
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1901,
      "CO₂ emissions per capita": 9.90617
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1902,
      "CO₂ emissions per capita": 10.200084
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1903,
      "CO₂ emissions per capita": 10.190824
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1904,
      "CO₂ emissions per capita": 10.149534
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1905,
      "CO₂ emissions per capita": 10.193703
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1906,
      "CO₂ emissions per capita": 10.467203
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1907,
      "CO₂ emissions per capita": 10.839091
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1908,
      "CO₂ emissions per capita": 10.481716
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1909,
      "CO₂ emissions per capita": 10.493224
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1910,
      "CO₂ emissions per capita": 10.50297
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1911,
      "CO₂ emissions per capita": 10.698935
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1912,
      "CO₂ emissions per capita": 10.082025
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1913,
      "CO₂ emissions per capita": 10.975125
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1914,
      "CO₂ emissions per capita": 10.597855
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1915,
      "CO₂ emissions per capita": 10.691779
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1916,
      "CO₂ emissions per capita": 11.030396
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1917,
      "CO₂ emissions per capita": 10.85709
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1918,
      "CO₂ emissions per capita": 10.07166
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1919,
      "CO₂ emissions per capita": 9.811919
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1920,
      "CO₂ emissions per capita": 10.318364
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1921,
      "CO₂ emissions per capita": 7.1308627
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1922,
      "CO₂ emissions per capita": 9.444493
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1923,
      "CO₂ emissions per capita": 10.033588
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1924,
      "CO₂ emissions per capita": 10.532615
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1925,
      "CO₂ emissions per capita": 9.965467
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1926,
      "CO₂ emissions per capita": 5.655135
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1927,
      "CO₂ emissions per capita": 10.448244
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1928,
      "CO₂ emissions per capita": 9.884894
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1929,
      "CO₂ emissions per capita": 10.408271
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1930,
      "CO₂ emissions per capita": 10.021771
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1931,
      "CO₂ emissions per capita": 9.352548
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1932,
      "CO₂ emissions per capita": 8.96392
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1933,
      "CO₂ emissions per capita": 8.869657
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1934,
      "CO₂ emissions per capita": 9.531863
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1935,
      "CO₂ emissions per capita": 9.610427
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1936,
      "CO₂ emissions per capita": 10.09914
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1937,
      "CO₂ emissions per capita": 10.368437
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1938,
      "CO₂ emissions per capita": 9.919003
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1939,
      "CO₂ emissions per capita": 9.903666
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1940,
      "CO₂ emissions per capita": 10.3948345
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1941,
      "CO₂ emissions per capita": 10.344048
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1942,
      "CO₂ emissions per capita": 10.161616
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1943,
      "CO₂ emissions per capita": 10.065381
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1944,
      "CO₂ emissions per capita": 10.015328
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1945,
      "CO₂ emissions per capita": 9.231059
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1946,
      "CO₂ emissions per capita": 9.4255495
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1947,
      "CO₂ emissions per capita": 9.810102
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1948,
      "CO₂ emissions per capita": 10.14036
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1949,
      "CO₂ emissions per capita": 10.181252
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1950,
      "CO₂ emissions per capita": 9.9604435
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1951,
      "CO₂ emissions per capita": 10.800899
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1952,
      "CO₂ emissions per capita": 10.444595
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1953,
      "CO₂ emissions per capita": 10.62748
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1954,
      "CO₂ emissions per capita": 10.8330145
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1955,
      "CO₂ emissions per capita": 11.257455
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1956,
      "CO₂ emissions per capita": 11.162249
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1957,
      "CO₂ emissions per capita": 11.039372
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1958,
      "CO₂ emissions per capita": 10.705431
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1959,
      "CO₂ emissions per capita": 10.461445
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1960,
      "CO₂ emissions per capita": 11.113797
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1961,
      "CO₂ emissions per capita": 11.129407
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1962,
      "CO₂ emissions per capita": 11.129884
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1963,
      "CO₂ emissions per capita": 11.246019
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1964,
      "CO₂ emissions per capita": 11.254874
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1965,
      "CO₂ emissions per capita": 11.444563
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1966,
      "CO₂ emissions per capita": 11.30431
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1967,
      "CO₂ emissions per capita": 10.769963
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1968,
      "CO₂ emissions per capita": 10.979154
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1969,
      "CO₂ emissions per capita": 11.331282
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1970,
      "CO₂ emissions per capita": 11.723682
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1971,
      "CO₂ emissions per capita": 11.815909
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1972,
      "CO₂ emissions per capita": 11.555677
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1973,
      "CO₂ emissions per capita": 11.738719
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1974,
      "CO₂ emissions per capita": 10.977184
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1975,
      "CO₂ emissions per capita": 10.730219
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1976,
      "CO₂ emissions per capita": 10.649842
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1977,
      "CO₂ emissions per capita": 10.758524
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1978,
      "CO₂ emissions per capita": 10.764969
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1979,
      "CO₂ emissions per capita": 11.464309
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1980,
      "CO₂ emissions per capita": 10.288156
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1981,
      "CO₂ emissions per capita": 9.955621
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1982,
      "CO₂ emissions per capita": 9.738896
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1983,
      "CO₂ emissions per capita": 9.683191
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1984,
      "CO₂ emissions per capita": 9.372629
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1985,
      "CO₂ emissions per capita": 9.886416
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1986,
      "CO₂ emissions per capita": 10.018491
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1987,
      "CO₂ emissions per capita": 10.049029
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1988,
      "CO₂ emissions per capita": 10.000239
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1989,
      "CO₂ emissions per capita": 10.170335
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1990,
      "CO₂ emissions per capita": 10.4927225
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1991,
      "CO₂ emissions per capita": 10.588317
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1992,
      "CO₂ emissions per capita": 10.288521
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1993,
      "CO₂ emissions per capita": 10.017321
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1994,
      "CO₂ emissions per capita": 9.896297
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1995,
      "CO₂ emissions per capita": 9.735405
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1996,
      "CO₂ emissions per capita": 10.0647545
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1997,
      "CO₂ emissions per capita": 9.62765
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1998,
      "CO₂ emissions per capita": 9.697672
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 1999,
      "CO₂ emissions per capita": 9.545588
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 2000,
      "CO₂ emissions per capita": 9.635275
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 2001,
      "CO₂ emissions per capita": 9.748509
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 2002,
      "CO₂ emissions per capita": 9.40991
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 2003,
      "CO₂ emissions per capita": 9.555585
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 2004,
      "CO₂ emissions per capita": 9.530167
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 2005,
      "CO₂ emissions per capita": 9.412128
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 2006,
      "CO₂ emissions per capita": 9.301154
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 2007,
      "CO₂ emissions per capita": 9.09334
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 2008,
      "CO₂ emissions per capita": 8.785364
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 2009,
      "CO₂ emissions per capita": 7.9049363
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 2010,
      "CO₂ emissions per capita": 8.124634
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 2011,
      "CO₂ emissions per capita": 7.3959785
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 2012,
      "CO₂ emissions per capita": 7.62153
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 2013,
      "CO₂ emissions per capita": 7.4175463
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 2014,
      "CO₂ emissions per capita": 6.764833
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 2015,
      "CO₂ emissions per capita": 6.461413
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 2016,
      "CO₂ emissions per capita": 6.061766
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 2017,
      "CO₂ emissions per capita": 5.8378453
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 2018,
      "CO₂ emissions per capita": 5.6886244
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 2019,
      "CO₂ emissions per capita": 5.4350777
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 2020,
      "CO₂ emissions per capita": 4.84416
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 2021,
      "CO₂ emissions per capita": 5.059431
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 2022,
      "CO₂ emissions per capita": 4.563232
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 2023,
      "CO₂ emissions per capita": 4.481841
    },
    {
      "Entity": "United Kingdom",
      "Code": "GBR",
      "Year": 2024,
      "CO₂ emissions per capita": 4.5257993
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1800,
      "CO₂ emissions per capita": 0.042136
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1801,
      "CO₂ emissions per capita": 0.043749023
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1802,
      "CO₂ emissions per capita": 0.046463702
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1803,
      "CO₂ emissions per capita": 0.04675338
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1804,
      "CO₂ emissions per capita": 0.051547863
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1805,
      "CO₂ emissions per capita": 0.05170035
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1806,
      "CO₂ emissions per capita": 0.049647022
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1807,
      "CO₂ emissions per capita": 0.055148073
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1808,
      "CO₂ emissions per capita": 0.056223534
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1809,
      "CO₂ emissions per capita": 0.05672419
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1810,
      "CO₂ emissions per capita": 0.057195846
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1811,
      "CO₂ emissions per capita": 0.05957973
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1812,
      "CO₂ emissions per capita": 0.0625836
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1813,
      "CO₂ emissions per capita": 0.06519789
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1814,
      "CO₂ emissions per capita": 0.06802918
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1815,
      "CO₂ emissions per capita": 0.070616506
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1816,
      "CO₂ emissions per capita": 0.07547438
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1817,
      "CO₂ emissions per capita": 0.079147205
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1818,
      "CO₂ emissions per capita": 0.08329477
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1819,
      "CO₂ emissions per capita": 0.0788342
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1820,
      "CO₂ emissions per capita": 0.07940742
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1821,
      "CO₂ emissions per capita": 0.08064995
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1822,
      "CO₂ emissions per capita": 0.08181233
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1823,
      "CO₂ emissions per capita": 0.08290245
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1824,
      "CO₂ emissions per capita": 0.09074809
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1825,
      "CO₂ emissions per capita": 0.09872902
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1826,
      "CO₂ emissions per capita": 0.111148365
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1827,
      "CO₂ emissions per capita": 0.11888613
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1828,
      "CO₂ emissions per capita": 0.12727666
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1829,
      "CO₂ emissions per capita": 0.13939415
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1830,
      "CO₂ emissions per capita": 0.15767905
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1831,
      "CO₂ emissions per capita": 0.16626401
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1832,
      "CO₂ emissions per capita": 0.21589011
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1833,
      "CO₂ emissions per capita": 0.2451494
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1834,
      "CO₂ emissions per capita": 0.22857675
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1835,
      "CO₂ emissions per capita": 0.28379282
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1836,
      "CO₂ emissions per capita": 0.30255765
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1837,
      "CO₂ emissions per capita": 0.33012334
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1838,
      "CO₂ emissions per capita": 0.3045117
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1839,
      "CO₂ emissions per capita": 0.3247494
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1840,
      "CO₂ emissions per capita": 0.3359056
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1841,
      "CO₂ emissions per capita": 0.34518078
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1842,
      "CO₂ emissions per capita": 0.37302932
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1843,
      "CO₂ emissions per capita": 0.40623948
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1844,
      "CO₂ emissions per capita": 0.47249264
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1845,
      "CO₂ emissions per capita": 0.5519618
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1846,
      "CO₂ emissions per capita": 0.6075555
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1847,
      "CO₂ emissions per capita": 0.6989572
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1848,
      "CO₂ emissions per capita": 0.7553745
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1849,
      "CO₂ emissions per capita": 0.79568434
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1850,
      "CO₂ emissions per capita": 0.83870095
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1851,
      "CO₂ emissions per capita": 1.0133029
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1852,
      "CO₂ emissions per capita": 1.0699053
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1853,
      "CO₂ emissions per capita": 1.1693825
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1854,
      "CO₂ emissions per capita": 1.2480785
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1855,
      "CO₂ emissions per capita": 1.394424
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1856,
      "CO₂ emissions per capita": 1.4202958
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1857,
      "CO₂ emissions per capita": 1.4139436
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1858,
      "CO₂ emissions per capita": 1.3925428
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1859,
      "CO₂ emissions per capita": 1.4731518
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1860,
      "CO₂ emissions per capita": 1.5011375
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1861,
      "CO₂ emissions per capita": 1.4090402
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1862,
      "CO₂ emissions per capita": 1.4285618
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1863,
      "CO₂ emissions per capita": 1.6126716
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1864,
      "CO₂ emissions per capita": 1.6866376
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1865,
      "CO₂ emissions per capita": 1.6529324
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1866,
      "CO₂ emissions per capita": 1.6266301
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1867,
      "CO₂ emissions per capita": 1.9555545
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1868,
      "CO₂ emissions per capita": 2.1599026
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1869,
      "CO₂ emissions per capita": 2.401964
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1870,
      "CO₂ emissions per capita": 2.4715502
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1871,
      "CO₂ emissions per capita": 2.524375
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1872,
      "CO₂ emissions per capita": 3.0265274
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1873,
      "CO₂ emissions per capita": 3.2694678
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1874,
      "CO₂ emissions per capita": 3.0782638
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1875,
      "CO₂ emissions per capita": 3.0432105
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1876,
      "CO₂ emissions per capita": 2.912211
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1877,
      "CO₂ emissions per capita": 3.1561265
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1878,
      "CO₂ emissions per capita": 3.0182126
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1879,
      "CO₂ emissions per capita": 3.5994267
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1880,
      "CO₂ emissions per capita": 3.9895415
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1881,
      "CO₂ emissions per capita": 4.1283484
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1882,
      "CO₂ emissions per capita": 4.5223513
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1883,
      "CO₂ emissions per capita": 4.7712994
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1884,
      "CO₂ emissions per capita": 4.9176164
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1885,
      "CO₂ emissions per capita": 4.8917246
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1886,
      "CO₂ emissions per capita": 5.053227
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1887,
      "CO₂ emissions per capita": 5.2871504
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1888,
      "CO₂ emissions per capita": 6.287121
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1889,
      "CO₂ emissions per capita": 5.5244336
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1890,
      "CO₂ emissions per capita": 6.478781
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1891,
      "CO₂ emissions per capita": 6.756879
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1892,
      "CO₂ emissions per capita": 6.9861884
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1893,
      "CO₂ emissions per capita": 6.9135346
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1894,
      "CO₂ emissions per capita": 6.3546634
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1895,
      "CO₂ emissions per capita": 7.0439777
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1896,
      "CO₂ emissions per capita": 6.9301863
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1897,
      "CO₂ emissions per capita": 7.0799294
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1898,
      "CO₂ emissions per capita": 7.5769787
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1899,
      "CO₂ emissions per capita": 8.534078
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1900,
      "CO₂ emissions per capita": 8.8752165
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1901,
      "CO₂ emissions per capita": 9.484995
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1902,
      "CO₂ emissions per capita": 9.867036
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1903,
      "CO₂ emissions per capita": 11.326901
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1904,
      "CO₂ emissions per capita": 10.963299
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1905,
      "CO₂ emissions per capita": 12.035906
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1906,
      "CO₂ emissions per capita": 12.405631
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1907,
      "CO₂ emissions per capita": 14.144756
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1908,
      "CO₂ emissions per capita": 12.144965
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1909,
      "CO₂ emissions per capita": 13.216985
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1910,
      "CO₂ emissions per capita": 14.18195
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1911,
      "CO₂ emissions per capita": 13.820649
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1912,
      "CO₂ emissions per capita": 14.535418
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1913,
      "CO₂ emissions per capita": 15.396738
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1914,
      "CO₂ emissions per capita": 13.879315
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1915,
      "CO₂ emissions per capita": 14.201243
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1916,
      "CO₂ emissions per capita": 15.553448
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1917,
      "CO₂ emissions per capita": 16.86919
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1918,
      "CO₂ emissions per capita": 17.372637
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1919,
      "CO₂ emissions per capita": 14.513221
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1920,
      "CO₂ emissions per capita": 16.816145
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1921,
      "CO₂ emissions per capita": 13.589925
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1922,
      "CO₂ emissions per capita": 13.520765
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1923,
      "CO₂ emissions per capita": 17.591671
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1924,
      "CO₂ emissions per capita": 15.544684
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1925,
      "CO₂ emissions per capita": 15.735723
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1926,
      "CO₂ emissions per capita": 16.812035
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1927,
      "CO₂ emissions per capita": 16.192951
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1928,
      "CO₂ emissions per capita": 15.685378
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1929,
      "CO₂ emissions per capita": 16.603048
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1930,
      "CO₂ emissions per capita": 14.58597
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1931,
      "CO₂ emissions per capita": 12.289558
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1932,
      "CO₂ emissions per capita": 10.321664
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1933,
      "CO₂ emissions per capita": 10.991698
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1934,
      "CO₂ emissions per capita": 11.621933
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1935,
      "CO₂ emissions per capita": 11.991493
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1936,
      "CO₂ emissions per capita": 13.672
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1937,
      "CO₂ emissions per capita": 14.204154
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1938,
      "CO₂ emissions per capita": 11.926593
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1939,
      "CO₂ emissions per capita": 13.037762
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1940,
      "CO₂ emissions per capita": 14.487894
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1941,
      "CO₂ emissions per capita": 15.615902
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1942,
      "CO₂ emissions per capita": 16.58958
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1943,
      "CO₂ emissions per capita": 16.911407
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1944,
      "CO₂ emissions per capita": 17.948437
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1945,
      "CO₂ emissions per capita": 17.084375
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1946,
      "CO₂ emissions per capita": 16.121332
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1947,
      "CO₂ emissions per capita": 17.508738
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1948,
      "CO₂ emissions per capita": 17.940481
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1949,
      "CO₂ emissions per capita": 14.822593
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1950,
      "CO₂ emissions per capita": 16.48146
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1951,
      "CO₂ emissions per capita": 16.734932
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1952,
      "CO₂ emissions per capita": 16.066175
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1953,
      "CO₂ emissions per capita": 16.212685
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1954,
      "CO₂ emissions per capita": 15.213387
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1955,
      "CO₂ emissions per capita": 16.417015
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1956,
      "CO₂ emissions per capita": 16.940548
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1957,
      "CO₂ emissions per capita": 16.535189
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1958,
      "CO₂ emissions per capita": 15.768463
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1959,
      "CO₂ emissions per capita": 15.986317
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1960,
      "CO₂ emissions per capita": 16.07164
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1961,
      "CO₂ emissions per capita": 15.733118
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1962,
      "CO₂ emissions per capita": 16.033794
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1963,
      "CO₂ emissions per capita": 16.47033
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1964,
      "CO₂ emissions per capita": 16.929342
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1965,
      "CO₂ emissions per capita": 17.37528
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1966,
      "CO₂ emissions per capita": 18.013317
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1967,
      "CO₂ emissions per capita": 18.462694
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1968,
      "CO₂ emissions per capita": 18.919777
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1969,
      "CO₂ emissions per capita": 19.654922
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1970,
      "CO₂ emissions per capita": 20.884413
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1971,
      "CO₂ emissions per capita": 20.74589
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1972,
      "CO₂ emissions per capita": 21.485521
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1973,
      "CO₂ emissions per capita": 22.2213
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1974,
      "CO₂ emissions per capita": 21.229671
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1975,
      "CO₂ emissions per capita": 20.145435
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1976,
      "CO₂ emissions per capita": 20.895985
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1977,
      "CO₂ emissions per capita": 21.273462
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1978,
      "CO₂ emissions per capita": 21.727701
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1979,
      "CO₂ emissions per capita": 21.569876
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1980,
      "CO₂ emissions per capita": 20.578814
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1981,
      "CO₂ emissions per capita": 19.567621
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1982,
      "CO₂ emissions per capita": 18.381195
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1983,
      "CO₂ emissions per capita": 18.340216
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1984,
      "CO₂ emissions per capita": 18.714457
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1985,
      "CO₂ emissions per capita": 18.599737
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1986,
      "CO₂ emissions per capita": 18.438473
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1987,
      "CO₂ emissions per capita": 19.06039
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1988,
      "CO₂ emissions per capita": 19.717833
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1989,
      "CO₂ emissions per capita": 19.78752
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1990,
      "CO₂ emissions per capita": 20.253748
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1991,
      "CO₂ emissions per capita": 19.793287
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1992,
      "CO₂ emissions per capita": 19.948572
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1993,
      "CO₂ emissions per capita": 20.102255
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1994,
      "CO₂ emissions per capita": 20.197258
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1995,
      "CO₂ emissions per capita": 20.230127
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1996,
      "CO₂ emissions per capita": 20.678873
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1997,
      "CO₂ emissions per capita": 20.745182
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1998,
      "CO₂ emissions per capita": 20.774931
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 1999,
      "CO₂ emissions per capita": 20.805534
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 2000,
      "CO₂ emissions per capita": 21.39786
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 2001,
      "CO₂ emissions per capita": 20.766743
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 2002,
      "CO₂ emissions per capita": 20.718021
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 2003,
      "CO₂ emissions per capita": 20.718428
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 2004,
      "CO₂ emissions per capita": 20.873743
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 2005,
      "CO₂ emissions per capita": 20.71883
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 2006,
      "CO₂ emissions per capita": 20.236742
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 2007,
      "CO₂ emissions per capita": 20.28047
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 2008,
      "CO₂ emissions per capita": 19.409172
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 2009,
      "CO₂ emissions per capita": 17.81067
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 2010,
      "CO₂ emissions per capita": 18.22542
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 2011,
      "CO₂ emissions per capita": 17.634142
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 2012,
      "CO₂ emissions per capita": 16.812391
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 2013,
      "CO₂ emissions per capita": 17.09857
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 2014,
      "CO₂ emissions per capita": 17.118917
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 2015,
      "CO₂ emissions per capita": 16.461393
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 2016,
      "CO₂ emissions per capita": 15.934658
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 2017,
      "CO₂ emissions per capita": 15.639208
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 2018,
      "CO₂ emissions per capita": 16.000992
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 2019,
      "CO₂ emissions per capita": 15.500492
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 2020,
      "CO₂ emissions per capita": 13.8168955
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 2021,
      "CO₂ emissions per capita": 14.758024
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 2022,
      "CO₂ emissions per capita": 14.802047
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 2023,
      "CO₂ emissions per capita": 14.31945
    },
    {
      "Entity": "United States",
      "Code": "USA",
      "Year": 2024,
      "CO₂ emissions per capita": 14.197287
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1750,
      "CO₂ emissions per capita": 0.0123539
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1760,
      "CO₂ emissions per capita": 0.013338744
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1770,
      "CO₂ emissions per capita": 0.015818821
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1780,
      "CO₂ emissions per capita": 0.01762452
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1790,
      "CO₂ emissions per capita": 0.021648014
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1800,
      "CO₂ emissions per capita": 0.033362012
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1801,
      "CO₂ emissions per capita": 0.032424923
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1802,
      "CO₂ emissions per capita": 0.040723216
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1803,
      "CO₂ emissions per capita": 0.029737618
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1804,
      "CO₂ emissions per capita": 0.031871665
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1805,
      "CO₂ emissions per capita": 0.0312423
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1806,
      "CO₂ emissions per capita": 0.03257867
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1807,
      "CO₂ emissions per capita": 0.035932284
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1808,
      "CO₂ emissions per capita": 0.03510763
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1809,
      "CO₂ emissions per capita": 0.03580392
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1810,
      "CO₂ emissions per capita": 0.038712256
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1811,
      "CO₂ emissions per capita": 0.039175447
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1812,
      "CO₂ emissions per capita": 0.039563652
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1813,
      "CO₂ emissions per capita": 0.039684527
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1814,
      "CO₂ emissions per capita": 0.04039906
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1815,
      "CO₂ emissions per capita": 0.04142064
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1816,
      "CO₂ emissions per capita": 0.042939313
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1817,
      "CO₂ emissions per capita": 0.04618237
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1818,
      "CO₂ emissions per capita": 0.047824178
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1819,
      "CO₂ emissions per capita": 0.047065414
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1820,
      "CO₂ emissions per capita": 0.046565164
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1821,
      "CO₂ emissions per capita": 0.047476232
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1822,
      "CO₂ emissions per capita": 0.04895967
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1823,
      "CO₂ emissions per capita": 0.05074557
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1824,
      "CO₂ emissions per capita": 0.05151068
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1825,
      "CO₂ emissions per capita": 0.053968403
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1826,
      "CO₂ emissions per capita": 0.054183245
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1827,
      "CO₂ emissions per capita": 0.057638906
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1828,
      "CO₂ emissions per capita": 0.058070365
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1829,
      "CO₂ emissions per capita": 0.057378292
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1830,
      "CO₂ emissions per capita": 0.07654942
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1831,
      "CO₂ emissions per capita": 0.07122242
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1832,
      "CO₂ emissions per capita": 0.06987763
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1833,
      "CO₂ emissions per capita": 0.07053719
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1834,
      "CO₂ emissions per capita": 0.07486173
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1835,
      "CO₂ emissions per capita": 0.081763364
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1836,
      "CO₂ emissions per capita": 0.08931406
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1837,
      "CO₂ emissions per capita": 0.088315286
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1838,
      "CO₂ emissions per capita": 0.0876033
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1839,
      "CO₂ emissions per capita": 0.0903286
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1840,
      "CO₂ emissions per capita": 0.09741459
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1841,
      "CO₂ emissions per capita": 0.09970388
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1842,
      "CO₂ emissions per capita": 0.10511472
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1843,
      "CO₂ emissions per capita": 0.107046865
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1844,
      "CO₂ emissions per capita": 0.11428088
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1845,
      "CO₂ emissions per capita": 0.124253325
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1846,
      "CO₂ emissions per capita": 0.12576827
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1847,
      "CO₂ emissions per capita": 0.13556848
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1848,
      "CO₂ emissions per capita": 0.13717109
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1849,
      "CO₂ emissions per capita": 0.1455768
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1850,
      "CO₂ emissions per capita": 0.1543173
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1851,
      "CO₂ emissions per capita": 0.15544534
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1852,
      "CO₂ emissions per capita": 0.16203701
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1853,
      "CO₂ emissions per capita": 0.16934833
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1854,
      "CO₂ emissions per capita": 0.19854853
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1855,
      "CO₂ emissions per capita": 0.20232286
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1856,
      "CO₂ emissions per capita": 0.21597627
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1857,
      "CO₂ emissions per capita": 0.21790454
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1858,
      "CO₂ emissions per capita": 0.22091475
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1859,
      "CO₂ emissions per capita": 0.23362447
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1860,
      "CO₂ emissions per capita": 0.25600263
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1861,
      "CO₂ emissions per capita": 0.2683436
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1862,
      "CO₂ emissions per capita": 0.27281454
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1863,
      "CO₂ emissions per capita": 0.28998128
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1864,
      "CO₂ emissions per capita": 0.311936
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1865,
      "CO₂ emissions per capita": 0.33019522
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1866,
      "CO₂ emissions per capita": 0.3399115
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1867,
      "CO₂ emissions per capita": 0.36277172
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1868,
      "CO₂ emissions per capita": 0.3718745
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1869,
      "CO₂ emissions per capita": 0.39315882
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1870,
      "CO₂ emissions per capita": 0.40004173
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1871,
      "CO₂ emissions per capita": 0.42324728
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1872,
      "CO₂ emissions per capita": 0.46637836
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1873,
      "CO₂ emissions per capita": 0.49293151
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1874,
      "CO₂ emissions per capita": 0.4597158
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1875,
      "CO₂ emissions per capita": 0.4953291
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1876,
      "CO₂ emissions per capita": 0.49953198
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1877,
      "CO₂ emissions per capita": 0.5064879
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1878,
      "CO₂ emissions per capita": 0.5077389
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1879,
      "CO₂ emissions per capita": 0.5404565
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1880,
      "CO₂ emissions per capita": 0.6067001
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1881,
      "CO₂ emissions per capita": 0.6237522
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1882,
      "CO₂ emissions per capita": 0.6542926
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1883,
      "CO₂ emissions per capita": 0.69086266
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1884,
      "CO₂ emissions per capita": 0.69398415
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1885,
      "CO₂ emissions per capita": 0.6941258
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1886,
      "CO₂ emissions per capita": 0.69947755
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1887,
      "CO₂ emissions per capita": 0.72873724
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1888,
      "CO₂ emissions per capita": 0.80136704
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1889,
      "CO₂ emissions per capita": 0.79603326
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1890,
      "CO₂ emissions per capita": 0.85953236
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1891,
      "CO₂ emissions per capita": 0.8943293
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1892,
      "CO₂ emissions per capita": 0.8954565
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1893,
      "CO₂ emissions per capita": 0.87847525
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1894,
      "CO₂ emissions per capita": 0.9041504
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1895,
      "CO₂ emissions per capita": 0.9514663
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1896,
      "CO₂ emissions per capita": 0.9764686
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1897,
      "CO₂ emissions per capita": 1.0157815
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1898,
      "CO₂ emissions per capita": 1.0642244
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1899,
      "CO₂ emissions per capita": 1.1542271
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1900,
      "CO₂ emissions per capita": 1.2062408
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1901,
      "CO₂ emissions per capita": 1.2352241
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1902,
      "CO₂ emissions per capita": 1.2563615
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1903,
      "CO₂ emissions per capita": 1.3584309
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1904,
      "CO₂ emissions per capita": 1.3623104
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1905,
      "CO₂ emissions per capita": 1.4395016
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1906,
      "CO₂ emissions per capita": 1.4907287
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1907,
      "CO₂ emissions per capita": 1.6844598
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1908,
      "CO₂ emissions per capita": 1.6041903
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1909,
      "CO₂ emissions per capita": 1.6576742
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1910,
      "CO₂ emissions per capita": 1.7258357
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1911,
      "CO₂ emissions per capita": 1.7395915
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1912,
      "CO₂ emissions per capita": 1.8148844
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1913,
      "CO₂ emissions per capita": 1.953036
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1914,
      "CO₂ emissions per capita": 1.7600181
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1915,
      "CO₂ emissions per capita": 1.7210791
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1916,
      "CO₂ emissions per capita": 1.8465517
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1917,
      "CO₂ emissions per capita": 1.9185146
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1918,
      "CO₂ emissions per capita": 1.8781468
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1919,
      "CO₂ emissions per capita": 1.6170758
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1920,
      "CO₂ emissions per capita": 1.8712187
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1921,
      "CO₂ emissions per capita": 1.6301049
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1922,
      "CO₂ emissions per capita": 1.6940141
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1923,
      "CO₂ emissions per capita": 1.9046209
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1924,
      "CO₂ emissions per capita": 1.8945516
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1925,
      "CO₂ emissions per capita": 1.8901367
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1926,
      "CO₂ emissions per capita": 1.8416375
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1927,
      "CO₂ emissions per capita": 1.9916863
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1928,
      "CO₂ emissions per capita": 1.9655659
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1929,
      "CO₂ emissions per capita": 2.0896432
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1930,
      "CO₂ emissions per capita": 1.910474
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1931,
      "CO₂ emissions per capita": 1.6917068
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1932,
      "CO₂ emissions per capita": 1.5107735
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1933,
      "CO₂ emissions per capita": 1.575086
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1934,
      "CO₂ emissions per capita": 1.6951171
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1935,
      "CO₂ emissions per capita": 1.7602078
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1936,
      "CO₂ emissions per capita": 1.9111634
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1937,
      "CO₂ emissions per capita": 2.0212395
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1938,
      "CO₂ emissions per capita": 1.8813955
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1939,
      "CO₂ emissions per capita": 1.9686357
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1940,
      "CO₂ emissions per capita": 2.1311977
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1941,
      "CO₂ emissions per capita": 2.1621437
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1942,
      "CO₂ emissions per capita": 2.1373806
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1943,
      "CO₂ emissions per capita": 2.1605964
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1944,
      "CO₂ emissions per capita": 2.1810997
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1945,
      "CO₂ emissions per capita": 1.798701
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1946,
      "CO₂ emissions per capita": 1.9183873
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1947,
      "CO₂ emissions per capita": 2.1332428
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1948,
      "CO₂ emissions per capita": 2.2310042
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1949,
      "CO₂ emissions per capita": 2.1086688
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1950,
      "CO₂ emissions per capita": 2.3787344
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1951,
      "CO₂ emissions per capita": 2.5155044
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1952,
      "CO₂ emissions per capita": 2.502896
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1953,
      "CO₂ emissions per capita": 2.52497
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1954,
      "CO₂ emissions per capita": 2.5279224
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1955,
      "CO₂ emissions per capita": 2.7166138
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1956,
      "CO₂ emissions per capita": 2.8354607
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1957,
      "CO₂ emissions per capita": 2.869636
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1958,
      "CO₂ emissions per capita": 2.8913758
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1959,
      "CO₂ emissions per capita": 2.9855902
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1960,
      "CO₂ emissions per capita": 3.1129305
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1961,
      "CO₂ emissions per capita": 3.0719054
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1962,
      "CO₂ emissions per capita": 3.1207407
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1963,
      "CO₂ emissions per capita": 3.2155952
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1964,
      "CO₂ emissions per capita": 3.3158252
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1965,
      "CO₂ emissions per capita": 3.3919592
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1966,
      "CO₂ emissions per capita": 3.4848654
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1967,
      "CO₂ emissions per capita": 3.5231547
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1968,
      "CO₂ emissions per capita": 3.6402233
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1969,
      "CO₂ emissions per capita": 3.8021357
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1970,
      "CO₂ emissions per capita": 4.0325885
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1971,
      "CO₂ emissions per capita": 4.1125965
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1972,
      "CO₂ emissions per capita": 4.219747
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1973,
      "CO₂ emissions per capita": 4.3555555
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1974,
      "CO₂ emissions per capita": 4.253289
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1975,
      "CO₂ emissions per capita": 4.173319
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1976,
      "CO₂ emissions per capita": 4.3101907
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1977,
      "CO₂ emissions per capita": 4.3524494
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1978,
      "CO₂ emissions per capita": 4.4325047
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1979,
      "CO₂ emissions per capita": 4.4657006
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1980,
      "CO₂ emissions per capita": 4.364099
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1981,
      "CO₂ emissions per capita": 4.168842
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1982,
      "CO₂ emissions per capita": 4.060496
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1983,
      "CO₂ emissions per capita": 4.0239425
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1984,
      "CO₂ emissions per capita": 4.068702
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1985,
      "CO₂ emissions per capita": 4.1374197
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1986,
      "CO₂ emissions per capita": 4.122175
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1987,
      "CO₂ emissions per capita": 4.1796536
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1988,
      "CO₂ emissions per capita": 4.262697
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1989,
      "CO₂ emissions per capita": 4.241189
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1990,
      "CO₂ emissions per capita": 4.266701
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1991,
      "CO₂ emissions per capita": 4.282473
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1992,
      "CO₂ emissions per capita": 4.090168
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1993,
      "CO₂ emissions per capita": 4.06862
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1994,
      "CO₂ emissions per capita": 4.047994
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1995,
      "CO₂ emissions per capita": 4.0835447
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1996,
      "CO₂ emissions per capita": 4.1481075
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1997,
      "CO₂ emissions per capita": 4.1149697
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1998,
      "CO₂ emissions per capita": 4.044522
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 1999,
      "CO₂ emissions per capita": 4.0791173
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 2000,
      "CO₂ emissions per capita": 4.133621
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 2001,
      "CO₂ emissions per capita": 4.1076345
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 2002,
      "CO₂ emissions per capita": 4.1442804
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 2003,
      "CO₂ emissions per capita": 4.30703
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 2004,
      "CO₂ emissions per capita": 4.3992558
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 2005,
      "CO₂ emissions per capita": 4.493561
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 2006,
      "CO₂ emissions per capita": 4.585831
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 2007,
      "CO₂ emissions per capita": 4.661509
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 2008,
      "CO₂ emissions per capita": 4.682571
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 2009,
      "CO₂ emissions per capita": 4.545518
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 2010,
      "CO₂ emissions per capita": 4.744936
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 2011,
      "CO₂ emissions per capita": 4.848876
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 2012,
      "CO₂ emissions per capita": 4.854014
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 2013,
      "CO₂ emissions per capita": 4.837743
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 2014,
      "CO₂ emissions per capita": 4.8045974
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 2015,
      "CO₂ emissions per capita": 4.7391157
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 2016,
      "CO₂ emissions per capita": 4.6824865
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 2017,
      "CO₂ emissions per capita": 4.705259
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 2018,
      "CO₂ emissions per capita": 4.752195
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 2019,
      "CO₂ emissions per capita": 4.7478137
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 2020,
      "CO₂ emissions per capita": 4.4577436
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 2021,
      "CO₂ emissions per capita": 4.634748
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 2022,
      "CO₂ emissions per capita": 4.6784525
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 2023,
      "CO₂ emissions per capita": 4.707772
    },
    {
      "Entity": "World",
      "Code": "OWID_WRL",
      "Year": 2024,
      "CO₂ emissions per capita": 4.729075
    }
  ]
}
