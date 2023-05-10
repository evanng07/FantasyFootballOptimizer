import Card from "../components/UI/Card";
import "../index.css";

const TeamPage = () => {
  return (
    <div className="justify-center items-center ml-32 mt-6">
      <div className="text-3xl font-bold text-white">Your Team</div>
      <div className="team">
        <Card>Patrick Mahomes</Card>
        <Card>Christian McCaffrey</Card>
        <Card>D'eandre Swift</Card>
        <Card>D.J. Moore</Card>
        <Card>Jaylen Waddle</Card>
        <Card>Mark Andrews</Card>
        <Card>Ceedee Lamb</Card>
        <Card>Juju Smith-Schuster</Card>
        <Card>Matt Prater</Card>
        <Card>Adam Thielen</Card>
        <Card>AJ Dillon</Card>
        <Card>Rhamondre Stevenson</Card>
        <Card>Rashad Penny</Card>
        <Card>Kenny Golladay</Card>
        <Card>Michael Gallup</Card>
        <Card>Joe Mixon</Card>
        <Card>Travis Kelce</Card>
        <Card>Matt Gay</Card>
      </div>
    </div>
  );
};

export default TeamPage;
