// All the values need to gets from data object

export const generateMustColoumnValues = () => {
  const estimateResourceMilestoneCondition = "Days" // “Estimate - Resource Milestone” :: cell [I, 1]

  const rate = rateGenerator();
  const parameterValueOne = 120;
  if (estimateResourceMilestoneCondition === "Days") {
    const parameterValueTwo = 8
    return rate * (parameterValueOne * parameterValueTwo);
  }
  return rate * parameterValueOne;
}

const rateGenerator = () => {
  const estimateResourceMilestoneCondition = "Days" // “Estimate - Resource Milestone” :: cell [C, 1]
  const conditionTwoCondition = "Must"  // “Estimate - Avg Rate” :: cell [C, 1]
  if (estimateResourceMilestoneCondition === "Days") {
    const filteredIndexes = [];
    const conditionTwoRange =  [{}] // “Customisations” :: cell [E, 3] to :: cell [E, 502]
    // const rangeTwoFilteredIndexes = conditionTwoRange?.filter((obj: any) => obj?.M === conditionTwoCondition)
    const filteredCondition = (item: any) => item.M === "Must";
    const filteredArray = conditionTwoRange.filter((item, index) => {
      if (filteredCondition(item)) {
        // If the condition is met, add the index to the filteredIndexes array
        filteredIndexes.push(index);
        return true; // Keep this item in the filtered array
      }
      return false; // Exclude this item from the filtered array
    });
    console.log("filteredArray==> ", filteredArray);
    
  }
  return 1.75;
}
