import * as React from "react";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";

export default function TextFields({label, type = "text", name, error, onChange, value}) {
    // const [name, setName] = React.useState("");

    // const handleChange = (event) => {
    //     setName(event.target.value);
    // };

    return (
        <Box
            component="form"
            sx={{
                "& > :not(style)": {m: 1},
            }}
            noValidate
            autoComplete="off"
        >
            <FormControl error={error} variant="standard">
                <InputLabel htmlFor="component-error">{label}</InputLabel>
                <Input
                    id="component-error"
                    value={value}
                    type={type}
                    onChange={onChange}
                    name={name}
                    aria-describedby="component-error-text"
                />
                {error && <FormHelperText id="component-error-text">{error}</FormHelperText>}
            </FormControl>
        </Box>
    );
}
