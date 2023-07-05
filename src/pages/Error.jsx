import errorImg from "../assets/404-Error-bro.svg";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import { useNavigate } from "react-router-dom";
import { Button } from "@material-tailwind/react";

const Error = () => {
    const navigate = useNavigate();
    const backHandler = () => {
        navigate('..');
    }
	return (
		<>
			<Navigation />
			<div className="flex justify-center items-center pt-8 gap-8">
				<div>
					<h1 className="text-7xl font-black leading-2">Uhmm...<br/>It&apos;s our fault</h1>
                    <p className="mt-4 text-xl font-semibold mb-8">We might have forget to build your requested page</p>
                    <Button onClick={backHandler} className="bg-dark-green" size="lg">Go back</Button>
				</div>
				<img src={errorImg} alt="Error 404" className="max-w-lg"/>
			</div>
			<Footer />
		</>
	);
};

export default Error;
