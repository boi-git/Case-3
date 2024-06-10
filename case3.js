// Determine the overtime multiplier
function getOvertimeMultiplier(hour) {
  if (hour >= 0 && hour <= 1) {
    return 2;
  } else if (hour >= 2 && hour <= 3) {
    return 2.1;
  } else if (hour >= 4) {
    return 3;
  }
}

// Determine the seniority multiplier
function getSeniorMultiplier(year) {
  if (yearsOfService >= 0 && yearsOfService <= 1) {
    return 1;
  } else if (yearsOfService >= 2 && yearsOfService <= 3) {
    return 1.1;
  } else if (yearsOfService >= 4 && yearsOfService <= 5) {
    return 1.2;
  } else if (yearsOfService >= 6) {
    return 1.7;
  }
}
function calculateOvertimeWages(yearsOfService, overtimeHours, hourlyRate) {
  let seniorityMultiplier = getSeniorMultiplier(yearsOfService);

  // Calculate total overtime wages
  let totalOvertimeWages = 0;
  for (let i = 1; i <= Math.floor(overtimeHours); i++) {
    totalOvertimeWages +=
      seniorityMultiplier * getOvertimeMultiplier(i) * hourlyRate;
  }

  // Add remaining part of the overtime if any
  if (overtimeHours % 1 !== 0) {
    totalOvertimeWages +=
      seniorityMultiplier *
      getOvertimeMultiplier(Math.floor(overtimeHours) + 1) *
      hourlyRate *
      (overtimeHours % 1);
  }

  return totalOvertimeWages;
}

// Example usage
let yearsOfService = 2;
let overtimeHours = 2.5;
let hourlyRate = 20;
let overtimeWages = calculateOvertimeWages(
  yearsOfService,
  overtimeHours,
  hourlyRate
);
console.log("Total overtime wages for the day: RM", overtimeWages.toFixed(2));
