import ListOfUsers from "./Component/ListOfUsers"
export const Dashboard =()=>{
    return <div className="h-screen bg-gray-50 p-4" >
        <p className="text-3xl font-bold text-gray-800 p-4 text-center">Aanshi's Dashboard Project</p>
        <ListOfUsers />
    </div>
}