export const dataIdentify = [
  {
    title: "ANALYSIS & DESIGN",
    rows: [
      "Analysis and Design",
      // "Customisations (Design)",
      // "Custom Requirements (Design)",
      // "Documentation",
      // "Design Review",
      // "Project Manager"
    ]
  },
  // {
  //   title: "BUILD",
  //   rows: [
  //     "Configuration",
  //     "Integrations",
  //     "Customisations (Build)",
  //     "Custom Requirements (Build)",
  //     "Document Layouts",
  //     "Reporting",
  //     "Data Migration",
  //     "CRP",
  //     "Testing",
  //     "Project Manager",
  //   ]
  // },
  // {
  //   title: "DEPLOY",
  //   rows: [
  //     "Train-the-trainer",
  //     "UAT Environment Preparation",
  //     "UAT Support",
  //     "PROD Environment Preparation",
  //     "Support Handover",
  //     "Project Manager",
  //   ]
  // },
  // {
  //   title: "OPERATION",
  //   rows: [
  //     "End user training",
  //     "Post Go-Live Support",
  //     "Project Manager",
  //   ]
  // }
]

export const moscowsData: any = {
  '100000000': 'Must',
  '100000001': "Should",
  "100000002": "Could",
  "100000003": "Will Not",
  "100000004": "Unanswered",
  "100000005": "Unsure",
}

export const filterTypesPriority = [
  // { type: "M", value: "100000000"},
  // { type: "M/S", value: "100000001"},
  // { type: "M/S/C", value: "100000000"},
  'M', "M/S", "M/S/C"
]


// <-Analysis and Design->C5
// IF('Estimate - Resource Milestone'!$C$1="Days",
//     SUM(
//         SUM(_xlfn.XLOOKUP($C$3&$D$2,Calcs!$A$1:$R$1&Calcs!$A$2:$R$2,Calcs!$A$3:$R$2001))>>240
//         <<Sum of primary resource design value from base data >>
//         <<>>
//         <<SUM of if(data.MOSCW = "Must" && $M/L/H$ = Mid ){if(quentity != "") {(split/100) * Design * Quentity} else{(split/100) * Design}}>>
//         +SUM(_xlfn.XLOOKUP($C$3&$D$2,Calcs!$BA$1:$BR$1&Calcs!$BA$2:$BR$2,Calcs!$BA$3:$BR$2001))
//         <<Sum of secondary resource design value from base data>>
//         <<SUM of if(data.MOSCW = "Must" && $M/L/H$ = Mid ){if(quentity != "") {((100 - split)/100) * Design } else{((100 - split)/100) * Design}}>>
//         +SUM(_xlfn.XLOOKUP($C$3&$D$2,Modules!$AL$2:$AT$2&Modules!$AL$3:$AT$3,Modules!$AL$104:$AT$104))>>14
//         <<sum of primary resource design values from module data>>
//         <<Design*(Split/100)>>
//         <<SUM of if(data.MOSCW = "Must" && $M/L/H$ = Mid )>>//if M/S data.MoSCoW "Must" && "Should" or <>"Could"
//         +SUM(_xlfn.XLOOKUP($C$3&$D$2,Modules!$DN$2:$DV$2&Modules!$DN$3:$DV$3,Modules!$DN$104:$DV$104))>>0
//         <<sum of secondary resource design values from module data>>
//         <<Design*((100-Split)/100)>>
//         <<>>
//         )/Parameters!$D$5,>>8