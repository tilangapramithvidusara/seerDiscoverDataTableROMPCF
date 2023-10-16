// ANALYSIS AND DESING

export const analysisAndDesign = {
  title: 'ANALYSIS & DESIGN',
  row: 'Analysis and Design'
}
export const cusomizationDesignanAlysisAndDesign = {
  title: 'ANALYSIS & DESIGN',
  row: 'Customisations (Design)'
}
export const customRequirementDesignAnalysisAndDesign = {
  title: 'ANALYSIS & DESIGN',
  row: 'Custom Requirements (Design)'
}
export const documentationAnalysisAndDesign = {
  title: 'ANALYSIS & DESIGN',
  row: 'Documentation'
}
export const designReviewanAlysisAndDesign = {
  title: 'ANALYSIS & DESIGN',
  row: 'Design Review'
}
export const projectMangerAnalysisAndDesign = {
  title: 'ANALYSIS & DESIGN',
  row: 'Project Manager'
}


// BUILD
export const configurationBuild = {
  title: 'BUILD',
  row: 'Configuration'
}
export const integrationsBuild = {
  title: 'BUILD',
  row: 'Integrations'
}
export const customisationBuild = {
  title: 'BUILD',
  row: 'Customisations (Build)'
}
export const customRequirementBuild = {
  title: 'BUILD',
  row: 'Custom Requirements (Build)'
}
export const documnentLayoutBuild = {
  title: 'BUILD',
  row: 'Document Layouts'
}
export const reporting = {
  title: 'BUILD',
  row: 'Reporting'
}
export const dataMigrationBuild = {
  title: 'BUILD',
  row: 'Data Migration'
}
export const crpBuild = {
  title: 'BUILD',
  row: 'CRP'
}
export const testingBuild = {
  title: 'BUILD',
  row: 'Testing'
}
export const projectManagerBuild = {
  title: 'BUILD',
  row: 'Project Manager'
}

// DEPLOY
export const trainTheTrainerDeploy = {
  title: 'DEPLOY',
  row: 'Train-the-trainer'
}
export const uatEncPrepDeploy = {
  title: 'DEPLOY',
  row: 'UAT Environment Preparation'
}
export const uatSupportDeploy = {
  title: 'DEPLOY',
  row: 'UAT Support'
}
export const prodEnvPrepDeploy = {
  title: 'DEPLOY',
  row: 'PROD Environment Preparation'
}
export const supportHandoverDeploy = {
  title: 'DEPLOY',
  row: 'Support Handover'
}
export const projectMangerDeploy = {
  title: 'DEPLOY',
  row: 'Project Manager'
}

// OPERATION
export const endUserTrainingOperation = {
  title: 'OPERATION',
  row: 'End user training'
}
export const postGoLiveSupportOperation = {
  title: 'OPERATION',
  row: 'Post Go-Live Support'
}
export const projectManagerOperation = {
  title: 'OPERATION',
  row: 'Project Manager'
}

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