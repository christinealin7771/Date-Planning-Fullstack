
module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define("Users", {
        fullName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        dateOfBirth: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        confirmPassword: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    })

    return Users
}