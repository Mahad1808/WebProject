const Themes = require('../model/themeModel');
//Create funnction for storing theme
const createTheme = async (req,res) => {
    console.log("theme")
    try{
        const themes = new Themes({
            name: req.body.name,
            color: req.body.color,
            themeId: req.body.themeId
        });

        const savedThemes = await themes.save();
        res.status(200).json({ message: 'Theme stored successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error storing theme' });
    }
};


//Create function for changing theme 
const updateTheme = async (req, res) => {

    console.log("mahad")
    try {
      const themeId = req.body.themeId;
      const color = req.body.color;
      const name = req.body.name;


      console.log(themeId);
      console.log(name)
  
      const themes = await findByIdAndUpdate(themeId, color, { new: true });
        console.log(themes);
      res.status(200).json(themes);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error updating theme' });
    }
  };

  module.exports = {
    createTheme,
    updateTheme
    }