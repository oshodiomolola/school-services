const { School } = require("../models/school");

const createSchool = async (req, res) => {
  try {
    const schoolData = req.body;
    const newSchool = await School.create(schoolData);
    return res
      .status(200)
      .json({ message: "School created successfully", school: newSchool });
  } catch (err) {
    console.log("Error creating school:", err);
    res.status(500).json({ error: "Failed to create school" });
  }
};

const updateSchool = async (req, res) => {
  try {
    const { schoolId } = req.params;
    const updateData = req.body;
    const updatedSchool = await School.findByIdAndUpdate(schoolId, updateData, {
      new: true,
    });
    return res
      .status(200)
      .json({ message: "School updated successfully", updatedSchool });
  } catch (err) {
    console.log("Error:", err);
    return res.status(500).json({ message: "Internal server error" });
  }
};


const viewSchool = async (req, res) => {
  try {
    const { id } = req.params;
    const school = await School.findById(id);
    res.status(200).json({result: "Successful", message: "view school", school});
  } catch (error) {
    res.status(404).json({ error: 'School not found' });
  }
};

const viewSchools = async (req, res) => {
  try {
    let filter = {};
    if (req.params.schoolId) {
      filter = { school: req.params.schoolId };
    }
    const allSchools = await School.find(filter);
    return res.status(200).json({
      result: "SUCCESSFUL",
      message: "View schools",
      size: allSchools.length,
      allSchools,
    });
  } catch (err) {
    console.log("Error viewing schools:", err);
    res.status(500).json({ error: "Failed to get schools" });
  }
};

module.exports = { createSchool, updateSchool, viewSchool, viewSchools };
