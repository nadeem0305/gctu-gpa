// shortcut: common Ghanaian 4.0 scale; confirm against the current GCTU student handbook.
export const GRADES = { A: 4.0, "B+": 3.5, B: 3.0, "C+": 2.5, C: 2.0, "D+": 1.5, D: 1.0, F: 0 };

export const CLASSES = [
  [3.6, "First Class"],
  [3.0, "Second Class Upper"],
  [2.5, "Second Class Lower"],
  [2.0, "Third Class"],
  [1.5, "Pass"],
  [0, "Fail"],
];

// courses: [{ credits, grade }]; rows with no grade or non-positive credits are ignored.
export function gpa(courses) {
  let points = 0, credits = 0;
  for (const c of courses) {
    const cr = Number(c.credits);
    if (!(c.grade in GRADES) || !(cr > 0)) continue;
    points += GRADES[c.grade] * cr;
    credits += cr;
  }
  return credits ? { gpa: points / credits, credits } : { gpa: null, credits: 0 };
}

export function classOf(g) {
  return g == null ? "" : CLASSES.find(([min]) => g >= min - 1e-9)[1];
}
