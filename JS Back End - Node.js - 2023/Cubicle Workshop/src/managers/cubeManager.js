const Cube = require('../models/Cube');

exports.add = async (newCube) => {

    await Cube.create(newCube)
};

exports.getAll = (search, from, to) => {
    let cubes = Cube.find();

    // TODO: Search results with mongoose filters

    if (search) {
        cubes = cubes.filter(cube => cube.name.toLowerCase().includes(search.toLowerCase()));
    }

    if (from) {
        cubes = cubes.filter(cube => cube.difficultyLevel >= Number(from));
    }

    if (to) {
        cubes = cubes.filter(cube => cube.difficultyLevel <= Number(to));
    }

    return cubes;
}

exports.getCube = (id) => {
    const cube = Cube.findById(id);

    return cube;
}