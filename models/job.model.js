module.exports = (sequelize, Sequelize) => {
  const Job = sequelize.define("job", {
    title: {
      type: Sequelize.STRING
    },
    salary: {
      type: Sequelize.STRING
    },
    companyName: {
      type: Sequelize.STRING
    }
  });

  return Job;
}
