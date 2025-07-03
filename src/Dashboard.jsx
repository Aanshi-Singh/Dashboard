import ListOfUsers from "./Component/ListOfUsers"
export const Dashboard =()=>{
    return <div className="h-screen bg-gray-100 p-4" >
    <p className="text-3xl font-bold text-gray-800 py-6 px-4 text-center">Aanshi's Dashboard Project</p>
    <ListOfUsers />
    </div>
}