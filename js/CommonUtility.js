const CommonUtility = {
    parseJson: function (target){
        try{
            return JSON.parse(target)
        }catch (error){
            return null;
        }
    },
    JsonToString: function (target){
        try {
            return JSON.stringify(target)
        }catch (error){
            return null;
        }
    }
}