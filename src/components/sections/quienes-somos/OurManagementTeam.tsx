import React from "react";
import team1 from "../../../assets/images/quienes-somos/team1.png";
import team2 from "../../../assets/images/quienes-somos/team2.jpeg";
import team3 from "../../../assets/images/quienes-somos/team3.png";
import team4 from "../../../assets/images/quienes-somos/team4.png";

export const OurManagementTeam: React.FC = () => {
  const teamMembers = [
    {
      name: "Juan Juárez Dioses",
      role: "Presidente",
      description:
        "Líder visionario con más de 10 años de experiencia. Ha dirigido la transformación de AESI en una organización de impacto nacional",
      image: team1,
    },
    {
      name: "Julio Pinto",
      role: "Secretario",
      description:
        "Abogado especialista con más de 20 años de experiencia en el desarrollo social con un enfoque innovador para comunidades vulnerables",
      image: team2,
    },
    {
      name: "Carolina Martínez",
      role: "Directora",
      description:
        "Licenciada en marketing y magíster en gestión pública con más de 10 años de experiencia en investigación y gestión de proyectos sociales",
      image: team3,
    },
    {
      name: "María Baffigo",
      role: "Directora",
      description:
        "Contadora pública colegiada con 15 años de experiencia en finanzas",
      image: team4,
    },
  ];

  return (
    <div className="py-8 md:py-16 bg-white font-sans">
      <div className="max-w-7xl mx-auto px-8">
        {/* Título y subtítulo */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Nuestro Equipo Directivo
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
            Los líderes visionarios que guían nuestra organización hacia el
            cumplimiento de nuestra misión
          </p>
        </div>

        {/* Grid de miembros del equipo */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Imagen circular con borde blanco */}
              <div className="pt-8 pb-4 px-6 text-center">
                <div className="relative inline-block">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg mx-auto"
                  />
                </div>
              </div>

              {/* Contenido de la tarjeta */}
              <div className="px-6 pb-8 text-center">
                
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {member.name}
                </h3>

                <div className="bg-[var(--azul-aesi)] text-white px-4 py-2 rounded-full text-sm font-semibold mb-4 inline-block">
                  {member.role}
                </div>

                <p className="text-sm text-gray-600 leading-relaxed">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
