function match(candidate, job) {
    if(!job.maxSalary || !candidate.minSalary) throw new Error
    if(job.maxSalary >= candidate.minSalary - 0.1 * candidate.minSalary) return true
    return false
}