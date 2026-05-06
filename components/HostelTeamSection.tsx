const hostelTeam = [
  // Leadership
  /*{
    name: "Dr. Janardhan Reddy K",
    email: "chennai.dirhostel@vit.ac.in",
    role: "Director – Hostel",
  },
  {
    name: "Dr. Felix A",
    email: "chennai.dydirectormh@vit.ac.in",
    role: "Deputy Director – Hostel",
  },*/
  // Wardens – maintenance / discipline / food
  {
    name: "Dr. Mohamed Imran A",
    email: "wmhmaintenance.cc@vit.ac.in",
    role: "Warden – Maintenance",
  },
  {
    name: "Dr. Murali Mohan G",
    email: "wmhdiscipline.cc@vit.ac.in",
    role: "Warden – Discipline",
  },
  {
    name: "Dr. Abhijit Mishra",
    email: "wmhfood.cc@vit.ac.in",
    role: "Warden – Food",
  },
  // Wardens – A Block
  {
    name: "Dr. Manikandan P",
    email: "wmha.cc@vit.ac.in",
    role: "Warden – A Block",
  },
  {
    name: "Dr. Sunil Kumar Pradhan",
    email: "wmha.cc@vit.ac.in",
    role: "Warden – A Block",
  },
  // Wardens – C Block
  /*{
    name: "Dr. Mansoor Hussain D",
    email: "wmhc.cc@vit.ac.in",
    role: "Warden – C Block",
  },*/
  {
    name: "Dr. Ankit Kumar",
    email: "wmhc.cc@vit.ac.in",
    role: "Warden – C Block",
  },
  // Wardens – D1 Block
  /*{
    name: "Dr. Trilok Nath Pandey",
    email: "wmhd.cc@vit.ac.in",
    role: "Warden – D1 Block",
  },*/
  {
    name: "Dr. Sankar P",
    email: "wmhd.cc@vit.ac.in",
    role: "Warden – D1 Block",
  },
  // Wardens – D2 Block
  /*{
    name: "Dr. Natarajan B",
    email: "wmhd2.cc@vit.ac.in",
    role: "Warden – D2 Block",
  },*/
  {
    name: "Prof. Tanmay Roy",
    email: "wmhd2.cc@vit.ac.in",
    role: "Warden – D2 Block",
  },
  // Wardens – E Block
  {
    name: "Dr. Rajeesh C S",
    email: "wmhe.cc@vit.ac.in",
    role: "Warden – E Block",
  },
  // Superintendent team
  {
    name: "Mr. Thamarai Selvan G",
    email: "chennai.suptmh@vit.ac.in",
    role: "Superintendent",
  },
  {
    name: "Mr. Saravanan P",
    email: "chennai.dysuptmh@vit.ac.in",
    role: "Deputy Superintendent",
  },
  // Supervisors by block
  {
    name: "Mr. Ajith Kumar B S",
    email: "ajithkumar.bs@vit.ac.in",
    role: "Supervisor – A Block",
  },
  {
    name: "Mr. Manivel S",
    email: "manivel.s@vit.ac.in",
    role: "Supervisor – C Block",
  },
  {
    name: "Mr. Nagamuthu A",
    email: "nagamuthu.a@vit.ac.in",
    role: "Supervisor – D1 Block",
  },
  {
    name: "Mr. Venkatesan P M",
    email: "venkatesan.pm@vit.ac.in",
    role: "Supervisor – D2 Block",
  },
  {
    name: "Mr. Mhurthie V M",
    email: "mhurthie.vm@vit.ac.in",
    role: "Supervisor – E Block",
  },
  {
    name: "Dr. Vijayalakshmi V",
    email: "wlh.cc@vit.ac.in",
    role: "Warden",
  },
  {
    name: "Dr. Vijayapriya R",
    email: "wlhmaintenance.cc@vit.ac.in",
    role: "Warden – Maintenance",
  },
  {
    name: "Dr. Softya Sebastian",
    email: "wlhdiscipline.cc@vit.ac.in",
    role: "Warden – Discipline",
  },
  {
    name: "Mrs. Ayesha Sidiqa",
    email: "chennai.dysuptlh@vit.ac.in",
    role: "Deputy Superintendent",
  },
  {
    name: "Mrs. Geetha Premjith Nair",
    email: "chennai.asstsuptlh@vit.ac.in",
    role: "Assistant Superintendent",
  },
  {
    name: "Ms. Kabita Nayar",
    email: "%20kabitha.nayar@vit.ac.in",
    role: "Supervisor – B Block",
  },
  {
    name: "Ms. Abinaya S",
    email: "abinaya.s@vit.ac.in",
    role: "Supervisor – C Block",
  },
];

export default function HostelTeamSection({ glass = true }: { glass?: boolean }) {
  const baseClasses =
    "timer-typography relative px-4 md:px-8 lg:px-20 py-12 md:py-16 overflow-hidden";
  const glassClasses = " bg-[#07080a]/90 border-t border-white/10";

  return (
    <section className={baseClasses + (glass ? glassClasses : "")}>
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#c8f059]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-sky-300/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <h2 className="timer-headline text-2xl md:text-3xl font-bold">Hostel Team</h2>
        {/*<p className="mt-2 text-xs md:text-sm text-gray-400">
          Wardens, superintendents, and supervisors for day-to-day operations.
        </p>*/}

        <ul className="mt-8 md:columns-2 md:gap-x-10 text-sm md:text-base text-white/80">
          {hostelTeam.map((member) => (
            <li
              key={`${member.name}-${member.email}-${member.role}`}
              className="flex items-start justify-between gap-3 border-b border-white/10 pb-3 mb-3 break-inside-avoid"
            >
              <div className="text-white font-semibold">{member.name}</div>
              <div className="text-white/55 text-right text-xs md:text-sm">
                {member.role}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

