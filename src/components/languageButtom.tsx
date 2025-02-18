import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import TranslateIcon from "@mui/icons-material/Translate";
import { useTranslation } from "react-i18next";
import Cookies from "js-cookie";
import { Box } from "@mui/material";

const options = ["Arabic", "English"];

export default function SplitButton() {
  const { i18n } = useTranslation();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLDivElement>(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  React.useEffect(() => {
    const language = Cookies.get("i18next") || "en";
    i18n.changeLanguage(language);
    setSelectedIndex(language === "ar" ? 0 : 1);
  }, [i18n]);

  const handleClick = () => {
    console.info(`You clicked ${options[selectedIndex]}`);
  };

  const handleMenuItemClick = (index: number) => {
    setSelectedIndex(index);
    setOpen(false);

    const language = index === 0 ? "ar" : "en";
    i18n.changeLanguage(language);
    Cookies.set("i18next", language, { expires: 365 });
  };

  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen);
  };

  const handleClose = (event: Event) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  };

  return (
    <React.Fragment>
      <Box
        mx={1}
        sx={{ direction: "ltr" }}
      >
        <ButtonGroup
          variant="outlined"
          ref={anchorRef}
          aria-label="Button group with a nested menu"
        >
          <Button
            onClick={handleClick}
            sx={{
              border: "1px solid #F067FF",
              color: "#fff",
              textTransform: "capitalize",
              fontSize: "16px",
              px: { xs: 1, sm: 3 },
            }}
          >
            {options[selectedIndex]}
          </Button>
          <Button
            size="large"
            aria-controls={open ? "split-button-menu" : undefined}
            aria-expanded={open ? "true" : undefined}
            aria-label="select merge strategy"
            aria-haspopup="menu"
            onClick={handleToggle}
            sx={{
              border: "1px solid #F067FF",
              color: "#fff",
              px: { xs: 1, sm: 1 },
            }}
          >
            <TranslateIcon sx={{ fontSize: "25px" }} />
          </Button>
        </ButtonGroup>
        <Popper
          sx={{ zIndex: 1, color: "red" }}
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === "bottom" ? "center top" : "center bottom",
                color: "#F067FF",

                background: "rgb(255,255,255,0.22)",
                fontSize: "16px",
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    id="split-button-menu"
                    autoFocusItem
                    sx={{
                      fontSize: "32px",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    {options.map((option, index) => (
                      <MenuItem
                        key={option}
                        selected={index === selectedIndex}
                        onClick={() => handleMenuItemClick(index)}
                        sx={{ fontSize: "18px" }}
                      >
                        {option}
                      </MenuItem>
                    ))}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </Box>
    </React.Fragment>
  );
}
