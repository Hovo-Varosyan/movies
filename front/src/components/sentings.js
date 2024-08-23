import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useState } from "react";
import "../assets/style/sentings.scss";
import { Submit } from "./submit";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";

const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
});

export const Sentings = () => {
    
    const [file, setFile] = useState("не выбрано");
    const [showPassword, setShowPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <section className="container">
            <div>
                <h4> Настроики</h4>
                <hr />
                <div className="div__container">
                    <h5>поменять Фото</h5>
                    <div className="fileupload">
                        <Button
                            component="label"
                            variant="contained"
                            startIcon={<CloudUploadIcon />}>
                            Upload file
                            <VisuallyHiddenInput
                                type="file"
                                onChange={(e) => {
                                    e.target.files.length > 0
                                        ? setFile(e.target.files[0].name)
                                        : setFile("не выбрано");
                                }} />
                        </Button>
                        <p>{file}</p>
                    </div>
                    <Submit value={"Сохранить"} />
                </div>
                <hr />
                <div className="div__container">
                    <h5>поменять имя</h5>
                    <FormControl variant="standard">
                        <InputLabel htmlFor="component-simple" >Имя</InputLabel>
                        <Input id="component-simple" />
                    </FormControl>
                    <Submit value={"Сохранить"} />
                </div>
                <hr />
                <div className="div__container">
                    <h5>поменять парол</h5>
                    <FormControl sx={{ m: 1, width: "25ch" }} variant="standard">
                        <InputLabel htmlFor="standard-adornment-password">
                            стары парол
                        </InputLabel>
                        <Input
                            id="standard-adornment-password"
                            type={showPassword ? "text" : "password"}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={() => setShowPassword((show) => !show)}
                                        onMouseDown={handleMouseDownPassword}
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }/>
                    </FormControl>
                    <FormControl sx={{ m: 1, width: "25ch" }} variant="standard">
                        <InputLabel htmlFor="standard-adornment-password">
                            Новы парол
                        </InputLabel>
                        <Input
                            id="standard-adornment-password"
                            type={showNewPassword ? "text" : "password"}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={() => setShowNewPassword((show) => !show)}
                                        onMouseDown={handleMouseDownPassword}
                                    >
                                        {showNewPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }/>
                    </FormControl>
                    <Submit value={"Сохранить"} />
                </div>
                <hr />
                <div className="div__container">
                    <h5>поменять Почту</h5>
                    <input type="email" name="email"  className="email"/>
                    <Submit value={"Сохранить"} />
                </div>
                <hr />
                <div className="div__container">
                    <h5 className="pointer delete">удалит аккаунт</h5>
                </div>
            </div>
        </section>
    );
};
