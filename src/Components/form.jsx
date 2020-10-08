import React, {Component} from "react";
import Box from "@material-ui/core/Box";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import Switch from '@material-ui/core/Switch';
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import { Link } from 'react-router-dom';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    formCard: {
        marginTop: 20,
    },
    formTitle: {
        borderBottom: 1 ,
    },
    form: {
        marginTop: 20,
    },
    textField:{
        marginTop: 20,
    },
    connectionFeield:{
         marginTop: 20,
    },
    connectionButton:{
         marginTop: 50
    }


});


const Form =()=>{

    const classes = useStyles();

    const [id, setid] = React.useState(0);
    const [channelName, setName] = React.useState('');
    const [conname, setConname] = React.useState(1);

    const [inputName, setInputName] = React.useState('');
    const [connection, setConnection] = React.useState([{id,name:null,checked:null}]);
    const [connectionType, setConnectionType] = React.useState('');
    const [connectionRecording, setConnectionRecording] = React.useState('');
    const onChangeName = (event)=>{
        setName(event.target.value);
    }
    const handleConnectionType = (event) =>{
        setConnectionType(event.target.value)
    };
    const handleConnectionRecording = (event) =>{
        setConnectionRecording(event.target.value)
    };
    const [states, setStates] = React.useState({
        checkedA: false,
    });

    const handleChangeSlide = (event) => {
        setStates({ [event.target.name]: event.target.checked });
        let newCon = connection.slice();
        newCon.map((c)=>{

            c.checked= event.target.checked;
            console.log(c.checked);

        });
    };

    const handleChangeInputName = (event) => {
        setInputName(event.target.value);
    };
    const setConName = (od, event)=>{
        console.log(event.target.value);
        let newCon = connection.slice();
        newCon.map((c)=>{
            if(c.id===od.id){
                c.name= event.target.value;
            }
        })
        setConnection(newCon);
    }
    const setNo=()=>{
        const o=id+6;
        setid(o);
    }
    const handleConnection = (event) => {


        const t=id+2;

        setNo();

        setConnection(oldArray => [...oldArray, {id:id,name:'',checked:false}]);
        console.log(connection)
    };
    const deleteConnection = (event) => {

        // let i = event.target.value;
        console.log(event)
        setConnection(connection.filter((o) =>(o.id !== event.id )));
    };
    const onSlide = (event) => {

        // let i = event.target.value;
        console.log(event)
        let newCon = connection.slice();
        newCon.map((c)=>{
            if(c.id===event.id){
                c.checked= !event.checked;
            }
        })
        setConnection(newCon);

    };

    const renderToggleAllButton =()=>{
        if(connection.length>1){
            return <Switch
                checked={states.checkedA}
                onChange={handleChangeSlide}
                name="checkedA"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
            />
        }

    }
    const fromDetails = {}
    const onsubmitM= ()=>{
        let cons = connection.slice();
        fromDetails = {
            inputName:inputName,
            connections:cons,
            connectionType:connectionType,
            connectionRecording:connectionRecording,
        }
        console.log(fromDetails)

    }

    return (


        <Box>
            <Card className={classes.root} variant="outlined">
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        Home > Multistream > Channel > Channel Details
                    </Typography>
                    <form onSubmit={onsubmitM}>
                        <Typography variant="h5" component="h2">
                            Create Channel
                        </Typography>
                        <Card className={classes.formCard} variant="outlined">
                            <CardContent>
                                <Typography className={classes.formTitle}>Channel Details</Typography>
                                <form className={classes.form} noValidate autoComplete="off">
                                    <div>
                                        <InputLabel htmlFor="age-native-simple" className={classes.textField}>Channel
                                            Name</InputLabel>
                                        <TextField
                                            value={channelName}
                                            onChange={onChangeName}
                                            id="outlined-basic"
                                            // className={}
                                            variant="outlined"
                                        />
                                    </div>
                                    <div>
                                        <InputLabel htmlFor="age-native-simple" className={classes.textField}>Input
                                            Name</InputLabel>
                                        <Select
                                            native
                                            value={inputName}
                                            onChange={handleChangeInputName}
                                            inputProps={{
                                                name: 'age',
                                                id: 'age-native-simple',
                                            }}
                                        >
                                            <option aria-label="None" value=""/>
                                            <option value={"test1"}>test1</option>
                                            <option value={"test2"}>test2</option>
                                            <option value={"test3"}>test3</option>
                                        </Select>
                                    </div>
                                    <Card className={classes.formCard} variant="outlined">
                                        <InputLabel htmlFor="age-native-simple"
                                                    className={classes.textField}>Connections</InputLabel>
                                        { renderToggleAllButton() }
                                        {connection.map((ob)=>(
                                            ob.id > 0 &&  (
                                                <div className={classes.connectionFeield} >
                                                    <Toolbar>


                                                        <InputLabel htmlFor="age-native-simple">Input
                                                            Name
                                                        </InputLabel>
                                                        <Select
                                                            native
                                                            value={ob.name}
                                                            onChange={(e)=>setConName(ob,e)}

                                                        >
                                                            <option aria-label="None" value=""/>
                                            <option value={"test1"}>test1</option>
                                            <option value={"test2"}>test2</option>
                                            <option value={"test3"}>test3</option>
                                                        </Select>
                                                        <Button variant="contained" color="primary" component="span" id={ob}
                                                                value={ob}
                                                                onClick={()=>deleteConnection(ob)}

                                                        >
                                                            Delete
                                                        </Button>
                                                        <Switch
                                                            checked={ob.checked}
                                                            onChange={()=>onSlide(ob)}
                                                            color="primary"
                                                            name="checkedB"
                                                            inputProps={{ 'aria-label': 'primary checkbox' }}
                                                        />
                                                    </Toolbar>
                                                </div>)

                                        ))}


                                        <label htmlFor="contained-button-file" className={classes.connectionButton}>
                                            <Button variant="contained" color="primary" component="span"
                                                    onClick={handleConnection}
                                            >
                                               Add Connection
                                            </Button>
                                        </label>

                                    </Card>
                                    <FormLabel component="legend">Connection Type</FormLabel>
                                    <RadioGroup aria-label="gender" name="gender1"  value={connectionType} onChange={handleConnectionType} >
                                        <FormControlLabel value="24X7" control={<Radio />} label="24X7" />
                                        <FormControlLabel value="Event" control={<Radio />} label="Event" />

                                    </RadioGroup>
                                    <FormLabel component="legend">Recording</FormLabel>
                                    <RadioGroup aria-label="gender" name="gender1" value={connectionRecording} onChange={handleConnectionRecording}>
                                        <FormControlLabel value="YES" control={<Radio />} label="YES" />
                                        <FormControlLabel value="NO" control={<Radio />} label="NO" />

                                    </RadioGroup>
                                </form>

                            </CardContent>
                        </Card>

                        <CardActions>
                            <Link to={{
                                pathname: "/viewconnection",
                                inputName,
                                connection,
                                channelName,
                                connectionType,
                                connectionRecording
                            }} >  <Button size="small" type="submit">Submit</Button> </Link>
                        </CardActions>
                    </form>
                </CardContent>
            </Card>
        </Box>)

}

export default Form;