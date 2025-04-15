import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
const Todos = (props) => {
    const deletenote=(index)=>{
        props.ondelete(index)
    }
    const updatenote=(index)=>{
        props.onupdate(index)
    }
    return (
        <>

            <div className="bg-amber-300  mx-auto my-8 p-4 rounded" style={{ width: "90%" }}>
                {
                    props.todos.map((todo, index) => (
                         <div key={index} className='grid grid-cols-12 gap-2 mb-2'>
                            <p className="col-span-10 bg-red-500 pl-2 h-8 flex items-center">{ props.todos[index]}</p>

                            <div className="col-span-1 flex justify-center items-center">
                                <FontAwesomeIcon icon={faEdit} size='xl' onClick={()=>updatenote(index)} className="text-xl cursor-pointer" />
                            </div>

                            <div className="col-span-1 flex justify-center items-center">
                                <FontAwesomeIcon icon={faTrash} size='xl' onClick={()=>deletenote(index)} className="text-xl text-red-600 cursor-pointer" />
                            </div>



                        </div>



                    ))

                }

            </div>


        </>
    )
}
export default Todos;