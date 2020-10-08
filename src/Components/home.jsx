import React from "react";
import Navbar from './navbar';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import PropTypes from 'prop-types';
import Switch from "@material-ui/core/Switch";
const drawerWidth = 240;


const viewInfo = (props)=>{
    const classes = makeStyles((theme) => ({
        root: {
            display: 'flex',
        },
        appBar: {
            // zIndex: theme.zIndex.drawer + 1,
        },
        drawer: {
            width: drawerWidth,
            flexShrink: 0,
        },
        drawerPaper: {
            width: drawerWidth,
        },
        drawerContainer: {
            overflow: 'auto',
        },
        content: {
            flexGrow: 1,
            padding: theme.spacing(3),
        },
        heading: {
            fontSize: theme.typography.pxToRem(15),
            fontWeight: theme.typography.fontWeightRegular,
        },
        table: {
            minWidth: 650,
        },
    }));

    function createData(channelname, inputname, channelstarttime, publishstatus, action) {
        return {
            channelname,
            inputname,
            channelstarttime,
            publishstatus,
            action,
            connection:
                props.location.connection.map((c)=> ({name: c.name, enable: c.checked}))
        }

    }
    function Row(props) {
        const { row } = props;
        const [open, setOpen] = React.useState(false);

        return (
            <React.Fragment>
                <TableRow className={classes.root}>
                    <TableCell>
                        <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                        </IconButton>
                    </TableCell>
                    <TableCell component="th" scope="row">
                        {row.channelname}
                    </TableCell>
                    <TableCell align="right">{row.inputname}</TableCell>
                    <TableCell align="right">{row. channelstarttime}</TableCell>
                    <TableCell align="right">{row.publishstatus}</TableCell>
                    <TableCell align="right">{row.action}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                        <Collapse in={open} timeout="auto" unmountOnExit>
                            <Box margin={1}>
                                <Typography variant="h6" gutterBottom component="div">
                                    History
                                </Typography>
                                <Table size="small" aria-label="purchases">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Name</TableCell>
                                            <TableCell>enable</TableCell>

                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {row.connection.map((connectionRow) => (
                                          (connectionRow.name !=null && connectionRow.name !='')  &&   (<TableRow key={connectionRow.name}>
                                                <TableCell component="th" scope="row">
                                                    {connectionRow.name}

                                                </TableCell>
                                                <TableCell>
                                                    <Switch
                                                        checked={connectionRow.enable}
                                                        // onChange={()=>onSlide(ob)}
                                                        color="primary"
                                                        name="checkedB"
                                                        inputProps={{ 'aria-label': 'primary checkbox' }}
                                                    />

                                                </TableCell>

                                            </TableRow>)
                                        ))}
                                    </TableBody>
                                </Table>
                            </Box>
                        </Collapse>
                    </TableCell>
                </TableRow>
            </React.Fragment>
        );
    }

    Row.propTypes = {
        row: PropTypes.shape({
            channelname: PropTypes.string.isRequired,
            inputname: PropTypes.string.isRequired,
            channelstarttime:PropTypes.string,
            publishstatus:PropTypes.string,
            action:PropTypes.string,
            connection: PropTypes.arrayOf(
                PropTypes.shape({
                    name: PropTypes.string.isRequired,
                    enable: PropTypes.string.isRequired

                }),
            ).isRequired,

        }).isRequired,
    };

    const rows = [
        createData(props.location.channelName, props.location.inputName, '', '', ''),

    ];



    console.log(props)
    return(
        <div className={classes.root}>
            <CssBaseline/>
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <Typography variant="h6" noWrap>
                        Clipped drawer
                    </Typography>
                </Toolbar>
            </AppBar>

            <main className={classes.content}>
                <Toolbar />
                <div>
                    <TableContainer component={Paper}>
                        <Table aria-label="collapsible table">
                            <TableHead>
                                <TableRow>
                                    <TableCell />
                                    <TableCell>Channel Name</TableCell>
                                    <TableCell align="right">Inputname</TableCell>
                                    <TableCell align="right">Channel Start Time</TableCell>
                                    <TableCell align="right">Channel Publish Status</TableCell>
                                    <TableCell align="right">Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <Row key={row.channelname} row={row} />
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>

                </div>

            </main>
        </div>
    );
};

export default viewInfo;