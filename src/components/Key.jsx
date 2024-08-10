
import blockchain from "../assets/blockchain.svg";
import immutable from "../assets/immutable.svg";
import reduced from "../assets/reduced.svg";
import decentralized from "../assets/decentralized.svg";
import crypto from "../assets/crypto.svg";
import smart from "../assets/smart.svg"





const Key = () => {


    return (
        <section>
            <div className='bg-[#070624] '>

                <div className="container mx-auto px-4 sm:px-[80px] py-[100px]">

                    <h2 className="text-white text-3xl pb-[48px] font-bold leading-10">
                        Key Features

                    </h2>
                    <div className='bg-[#070624] grid-cols-4 gap-4 md:flex md:flex-row h-1/2'>
                        <div
                            className="h-1/2 mx-3 mt-6 flex flex-col rounded-lg bg-[#070624] sm:shrink-0 sm:grow sm:basis-0 border-white border-2  hover:skew-x-12  
                            duration-150 ease-in-out">

                            <div className="w-full shadow-md">
                                <h3 className="font-bold text-white text-center p-2 text-lg">
                                    Blockchain Integration
                                </h3>
                                <p className="font-normal text-justify text-white text-sm sm:p-4 p-4">
                                    ThriftChain leverages blockchain technology
                                    for enhanced security and transparency.
                                    


                                </p>

                            </div>
                            <img
                                src={blockchain}
                                alt="blockchain"
                                className="object-fit-object w-full  rounded mt-4"
                            />
                        </div>

                        <div
                            className="h-1/4 mx-3 mt-6 flex flex-col rounded-lg bg-[#070624] sm:shrink-0 sm:grow sm:basis-0 border-white border-2  hover:skew-x-12  
                            duration-150 ease-in-out">

                            <div className="w-full h-1/2 shadow-md">
                                <h3 className="font-bold text-white text-center p-2 text-lg">
                                    Immutable Ledger
                                </h3>
                                <p className="font-normal text-justify text-white text-sm sm:p-4 p-4">
                                    ThriftChain ensures that all transactions, savings are recorded on an
                                    immutableledger. 
                                    
                                </p>


                            </div>
                            <img
                                src={immutable}
                                alt="immutable"
                                className="object-fit-object w-full object-center rounded mt-9"
                            />

                        </div>
                        <div
                            className="mx-3 mt-6 flex flex-col rounded-lg bg-[#070624] sm:shrink-0 sm:grow sm:basis-0 border-white border-2  hover:skew-x-12  
                            duration-150 ease-in-out">
                            <div className="w-full h-1/2 shadow-md">
                                <h3 className="font-bold text-white text-center p-2 text-lg">
                                    Smart Contract Automation
                                </h3>
                                <p className="font-normal text-justify text-white text-sm sm:p-4 p-4">
                                    The use of smart contracts in ThriftChain
                                    automates various aspects of the platform.
                                    
                                </p>

                            </div>
                            <img
                                src={smart}
                                alt="smart"
                                className="object-fit-object w-full object-center rounded mt-2"
                            />
                        </div>



                    </div>
                    <div className='bg-[#070624] grid-cols-4 gap-4 md:flex md:flex-row'>
                        <div
                            className="h-1/2 mx-3 mt-6 flex flex-col rounded-lg bg-[#070624] sm:shrink-0 sm:grow sm:basis-0 border-white border-2  hover:skew-x-12  
                            duration-150 ease-in-out">

                            <div className="w-full h-1/2 shadow-md">
                                <h3 className="font-bold text-white text-center p-2 text-lg">
                                    Reduced Intermediaries
                                </h3>
                                <p className="font-normal text-justify text-white text-sm sm:p-4 p-4">
                                    ThriftChain reduces the need for traditional intermediaries
                                    in financial transactions. 


                                </p>

                            </div>
                            <img
                                src={reduced}
                                alt="reduced"
                                className="object-fit-object w-full object-center rounded mt-7"
                            />
                        </div>

                        <div
                            className="h-1/2 mx-3 mt-6 flex flex-col rounded-lg bg-[#070624] sm:shrink-0 sm:grow sm:basis-0 border-white border-2  hover:skew-x-12  
                            duration-150 ease-in-out">

                            <div className="w-full h-1/2 shadow-md">
                                <h3 className="font-bold text-white text-center p-2 text-lg">
                                    Decentralized Verification
                                </h3>
                                <p className="font-normal text-justify text-white text-sm sm:p-4 p-4">
                                    Blockchain technology operates on a
                                    decentralized network of nodes. 

                                </p>



                            </div>
                            <img
                                src={decentralized}
                                alt="decentralized"
                                className="object-fit-object w-full object-center rounded mt-4"
                            />
                        </div>
                        <div
                            className=" mx-3 mt-6 flex flex-col rounded-lg bg-[#070624] sm:shrink-0 sm:grow sm:basis-0 border-white border-2 hover:skew-x-12  
                            duration-150 ease-in-out">

                            <div className="w-full  shadow-md">
                                <h3 className="font-bold text-white text-center p-2 text-lg">
                                    Cryptocurrency Compatibility
                                </h3>
                                <p className="font-normal text-justify text-white text-sm sm:p-4 p-4">
                                    ThriftChain blockchain integration allows users
                                    stable coins like USDT or USDC. 
                                </p>

                            </div>
                            <img
                                src={crypto}
                                alt="crypto"
                                className="object-fit-object w-full object-center rounded mt-7"
                            />
                        </div>

                    </div>

                </div>
            </div>
        </section>

    )


}


export default Key;




