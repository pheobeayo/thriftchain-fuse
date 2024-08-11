import UseFetchRequests from "../../Hooks/UseFetchRequests";
import UseFetchUserSingle from "../../Hooks/UseFetchUserSingle";
import UseFetchGroupThrift from "../../Hooks/UseFetchGroupThrift";
import UseFetchUserGroup from "../../Hooks/UseFetchUserGroup";
import browseBg from "../../assets/browse.png";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const allRequests = UseFetchRequests();
  const allUserRequests = UseFetchUserSingle();
  const allGroupRequests = UseFetchGroupThrift();
  const allUserGroupRequests = UseFetchUserGroup();
  const navigate = useNavigate();

  return (
    <main className="text-white">
      <h1 className="mb-4 lg:text-[38px] md:text-[38px] text-[24px]">
        Overview
      </h1>
      <div className="flex flex-col lg:flex-row md:flex-row justify-between">
        <div className="bg-[#060E37] p-8 rounded-lg w-[100%] lg:w-[22%] md:w-[22%] text-center my-4">
          <h3 className="text-[16px] mb-2 uppercase">Single Thrift Total</h3>
          <p className="text-[18px] lg:text-[26px] md:text-[26px]">
            {allRequests.length}
          </p>
        </div>
        <div className="bg-[#060E37] p-8 rounded-lg w-[100%] lg:w-[22%] md:w-[22%] text-center my-4">
          <h3 className="text-[16px] mb-2 uppercase">my Single Thrift Total</h3>
          <p className="text-[18px] lg:text-[26px] md:text-[26px]">
            {allUserRequests.length}
          </p>
        </div>
        <div className="bg-[#060E37] p-8 rounded-lg w-[100%] lg:w-[22%] md:w-[22%] text-center my-4">
          <h3 className="text-[16px] mb-2 uppercase">group Thrift Total</h3>
          <p className="text-[18px] lg:text-[26px] md:text-[26px]">
            {allGroupRequests.length}
          </p>
        </div>
        <div className="bg-[#060E37] p-8 rounded-lg w-[100%] lg:w-[22%] md:w-[22%] text-center my-4">
          <h3 className="text-[16px] mb-2 uppercase">My group Thrift Total</h3>
          <p className="text-[18px] lg:text-[26px] md:text-[26px]">
            {allUserGroupRequests.length}
          </p>
        </div>
      </div>

      <div className="p-8 bg-[#060E37] rounded-lg mb-8 mt-2">
        <div>
          <div className="flex justify-between items-center flex-col lg:flex-row md:flex-row">
            <div className="w-[100%] lg:w-[50%] md:w-[50%]">
              <h2 className="text-[18px] lg:text-[22px] md:text-[22px] font-bold">
                Browse and find <br />
                contribution modules to join
              </h2>
              <div className="mt-4 mb-3 flex items-center flex-col lg:flex-row md:flex-row">
                <button className="style border py-2 px-8 my-4 hover:bg-[#9C0F94] mr-4 w-[100%] lg:w-[50%] md:w-[50%]" onClick={() => navigate('/dashboard/singlethrift')}>
                  Single Thrifts
                </button>
                <button className="style border py-2 px-8 my-4 hover:bg-[#9C0F94] mr-4 w-[100%] lg:w-[50%] md:w-[50%]" onClick={() => navigate('/dashboard/groupthrift')}>
                  Group Thrifts
                </button>
              </div>
            </div>
            <img
              src={browseBg}
              alt=""
              className="w-[100%] lg:w-[40%] md:w-[40%] mx-auto"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
