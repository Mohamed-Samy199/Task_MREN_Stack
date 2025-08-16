import userModel from "../../DB/Models/user.model.js";
import { successResponse } from "../../utils/response/successResponse.js";
import { generateToke } from "../../utils/Securty/token.js";


// create acounte and login 
export const registerAndLogin = async (req, res, next) => {
    const { email } = req.body;
    
    const user = await userModel.create({ email, isConfirmed: true });
    const access_token = generateToke({ payload: { id: user._id, role: user.role }, expiresIn: 60 * 60 * 24 * 7 });
    return successResponse({ res, status: 201, data: { user , access_token } });
}

