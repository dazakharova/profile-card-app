import '../styles/ProfileCardTailwind.css';

const ProfileCardTailwind = () => {
  return (
      <div className="flex flex-col items-center bg-[#f5f5f5] border border-[#e0e0e0] p-5 rounded-[8px] text-center mx-auto">
        <img src="https://picsum.photos/100/100" alt="avatar" className="w-[100px] h-[100px] rounded-full mb-[10px]" />
        <h2 className="text-[20px] font-bold text-black mb-[8px]">Matti Meikäläinen</h2>
        <p className="font-[Arial] text-[14px] text-[#666]">Full-stack developer, passionate about coding and coffee</p>
        <button className="bg-[#1976d2] text-white w-[120px] py-[8px] px-[15px] rounded-[4px] mb-[20px]">Contact Me</button>
        <p className="font-[Arial] text-[14px] text-[#666]">Created with TailwindCSS</p>
      </div>
  )
}

export default ProfileCardTailwind;