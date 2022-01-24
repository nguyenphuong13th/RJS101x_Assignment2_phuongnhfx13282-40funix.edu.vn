import { Card,CardImg,CardTitle } from 'reactstrap'
import { Form } from 'react-bootstrap';
import { useState } from "react"
import { Link } from 'react-router-dom';
import logo from '../assets/images/alberto.png'
function Eelist(props){
    const[selectedEe,setSelectedEe] = useState(null)
    const OnSelectedEe = (staffs)=>{
        setSelectedEe(staffs);
    }
    function handleOnCHange(option){
        if(option == 'Name'){
            props.staffs.sort(function(a,b){
                var nameA = a.name.toUpperCase(); // ignore upper and lowercase
                var nameB = b.name.toUpperCase(); // ignore upper and lowercase
                if (nameA < nameB) {
                  return -1;
                }
                if (nameA > nameB) {
                  return 1;
                }

                // names must be equal
                return 0;
            })
        }else if(option=='Salary'){
            props.staffs.sort(function(a,b){
                return a.salaryScale - b.salaryScale;
            })
        }
    }
    const Liststaff = props.staffs.map((staffs)=>{
        return(
            <div key={staffs.id} onClick={()=>OnSelectedEe(staffs)} className='col-sm-12 col-md-6 col-lg-3 mt-5'>
                {/* config route when selected invidual selected */}
                <Link className='text-decoration-none text-dark' to={`/${staffs.id}`}>
                    <Card body className="text-center">
                        <CardImg  width='100%' src={logo} alt={staffs.name}/>
                        <CardTitle >{staffs.name}</CardTitle>
                    </Card>
                </Link>
            </div>
        )
    })
    return (
        <div className='container mt-5'>
            <div className='row'>
            <Form.Select aria-label="Default select example"
            onChange={handleOnCHange}>
                <option>Sort by :</option>
                <option value="1">Name</option>
                <option value="2">Department</option>
                <option value="3">Salary</option>
            </Form.Select>
                {Liststaff}
            </div>
        </div>
    )
}
export default Eelist