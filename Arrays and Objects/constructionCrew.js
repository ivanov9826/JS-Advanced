function constructionCrew(obj) {
    let water = 0
    if (obj.dizziness != false) {
        water = obj.weight * obj.experience * 0.1
        obj.levelOfHydrated += water
        obj.dizziness = false
    }
    return obj

}

console.log(constructionCrew(
    {
        weight: 80,
        experience: 1,
        levelOfHydrated: 0,
        dizziness: true
    }))