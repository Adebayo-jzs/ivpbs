export default function Unauthorised(){
    return(
        <div className="min-h-screen bg-black flex flex-col items-center justify-center text-white">
            <span className="flex items-center justify-center">
                <h1 className="text-xxl font-bold pe-3" style={{borderRight:"1px solid white", fontSize:"27px"}}>401</h1>
                <h1 className="text-white ps-3" style={{fontSize:"20px"}}>You are not authorized to access this page.</h1>
            </span>
            <a href="/" className="bg-[#1cca5b] p-2 rounded mt-3">Back to Tome</a>
        </div>
    );
}