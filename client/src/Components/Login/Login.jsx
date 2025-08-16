import { useFormik } from "formik";
import * as Yup from "yup";
import { hostUrl } from "../../utlis/host";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/auth";


export default function Login() {
    const { saveUserData, t } = useContext(AuthContext);

    const navigate = useNavigate();

    const validationSchema = Yup.object({
        email: Yup.string().email()
    });

    const formik = useFormik({
        initialValues: {
            email: ''
        },
        validationSchema,
        onSubmit: (values) => {
            const url = `${hostUrl}/auth/login`;
            axios.post(url, values)
                .then((data) => {
                    if (data.status === 201) {
                        localStorage.setItem("token", data.data.data.access_token);
                        saveUserData();
                        navigate('/dashbord');
                    }
                })
                .catch((error) => {
                    console.log(error.response.data.message);
                });
        }
    });

    return (
        <div style={{ border: "1px solid #165a7f", padding: "5px", borderRadius: "10px", width: "75%", margin: "10px" }}>
            <form onSubmit={formik.handleSubmit}>
                <div className="my-3">
                    <input
                        type="email"
                        placeholder={`${t("Email Address")}`}
                        style={{ border: ".5px solid #64c5b5", padding: "5px", borderRadius: "10px", width: "95%", fontSize: "20px", margin: "10px" }}
                        value={formik.values.email}
                        name="email"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                </div>

                <div className="my-4 text-center">
                    <button disabled={!(formik.dirty && formik.isValid)} className="main-btn">
                        {t("sign in")}
                    </button>
                </div>
            </form>
        </div>
    );
}
