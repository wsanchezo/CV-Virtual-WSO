   // Variables globales
      let currentLanguage = "es";
      let nightMode = false;

      // Diccionarios de idiomas
        const translations = {
          es: {
            job_title: "Ingeniero de Software",
            software_engineering: "Ingeniería de Software",
            university: "Institución Universitaria Politécnico Grancolombiano",
            months: "Octubre",
            graduated_june: "Graduado Junio 2025",
            institution: "Institución COLSUBSIDIO Educación Tecnológica",
            certification: "CERTIFICACIÓN Y GRADUADO",
            night_mode: "Modo Nocturno",
            day_mode: "Modo Diurno",
            select_theme: "Seleccionar Tema",
            select_language: "Seleccionar Idioma",
            dashboard: "Dashboard",
            profile: "Perfil Profesional",
            experience: "Experiencia Laboral",
            skills: "Habilidades",
            education: "Educación",
            projects: "Proyectos",
            contact: "Contacto",
            experience_years: "Años de Experiencia",
            projects_count: "Proyectos",
            skills_count: "Tecnologías",
            certifications: "Certificaciones",
            quick_summary: "Resumen Profesional",
            visual_report: "Reporte Visual",
            projects_by_category: "Proyectos por Categoría",
            tech_distribution: "Distribución de Tecnologías",
            skill_levels: "Niveles de Habilidad",
            education_chart: "Formación Académica",
            tech_stack: "Stack Tecnológico",
            professional_summary:
              "Ingeniero de Software con experiencia en desarrollo full-stack, arquitectura de software y sistemas empresariales. Especialista en gestión de proyectos tecnológicos, bases de datos y metodologías ágiles.",
            profile_description:
              "Ingeniero de Software con experiencia en desarrollo full-stack, arquitectura de software y sistemas empresariales. Especialista en gestión de proyectos tecnológicos, bases de datos y metodologías ágiles, con énfasis en sistemas distribuidos, pruebas de calidad, IoT e integración continua. Orientado a la innovación, el liderazgo de equipos y la creación de soluciones tecnológicas que generan valor y eficiencia en las organizaciones.",
            career_goals: "Objetivos Profesionales",
            goal1:
              "Aplicar conocimientos en desarrollo de software empresarial y arquitectura de sistemas",
            goal2:
              "Contribuir a la transformación digital mediante soluciones innovadoras y escalables",
            goal3:
              "Desempeñar roles que combinen desarrollo técnico con liderazgo de equipos",
            duration: "Duración",
            position: "Cargo",
            work_duration: "Marzo 2017 - Diciembre 2024",
            job_position: "Auxiliar Gestión Base T.I.",
            responsibilities: "Responsabilidades",
            resp1:
              "Administración de sistemas de información empresariales y bases de datos corporativas",
            resp2: "Implementación de mejoras en infraestructura tecnológica",
            resp3:
              "Soporte técnico especializado y colaboración en proyectos de transformación digital",
            technical_skills: "Lenguajes de Programación",
            web_skills: "Desarrollo Web",
            database_skills: "Bases de Datos",
            tools_skills: "Herramientas",
            methodologies_skills: "Metodologías",
            rest_apis: "APIs REST",
            institution: "Institución",
            date: "Fecha",
            gpa: "PGA",
            additional_training: "Formación Complementaria",
            degree_title: "Ingeniería de Software",
            university: "Institución Universitaria Politécnico Grancolombiano",
            graduation_date: "Graduado Junio 2025",
            cs_diploma: "Diplomado Ciencias de la Computación",
            cs_date: "Octubre 2024",
            cs_duration: "100 horas",
            agile_methodologies: "Metodologías Ágiles (Scrum, Kanban, Lean)",
            colsubsidio_education: "COLSUBSIDIO Educación Tecnológica",
            agile_date: "Abril 2025",
            agile_duration: "48 horas",
            english_certification: "Certificación Inglés Técnico",
            english_date: "Septiembre 2022",
            english_duration: "300 horas",
            project1_title:
              "Arquitectura Empresarial - Inmobiliaria Los Alpes S.A.",
            project1_description:
              "Desarrollo de modelo arquitectónico completo con análisis AS-IS/TO-BE",
            project1_tech: "Java Enterprise, MySQL, Patrones de Diseño",
            project2_title: "Sistema Cliente-Servidor Distribuido",
            project2_description:
              "Implementación con sockets Java y base de datos MySQL",
            project2_achievements:
              "Manejo de 500+ conexiones concurrentes, alta disponibilidad",
            project3_title: "Plataforma IoT con Azure Hub",
            project3_description:
              "Conectividad de dispositivos móviles, Raspberry Pi y Arduino",
            project3_tech: "Azure IoT, Python, C++, Dashboards en tiempo real",
            project4_title: "Portfolio Web Interactivo",
            project4_description:
              "CV digital con visualizaciones de datos y diseño responsivo",
            project4_tech:
              "HTML5, CSS3, JavaScript, Chart.js, Responsive Design",
            project5_title: "Aplicaciones de Gestión",
            project5_description:
              "Desarrollo de herramientas para optimización de procesos empresariales",
            project5_tech: "Java, Python, SQL, Metodologías Ágiles",
            technologies: "Tecnologías",
            achievements: "Logros",
            contact_info: "Información de Contacto",
            location: "Bogotá D.C., Colombia",
            send_message: "Enviar Mensaje",
            name: "Nombre",
            message: "Mensaje",
            send: "Enviar",
            project6_title:
              "💼🏥 MediGest Pro Sistema Integral de Gestión Médica",
            project6_description:
              "Software para gestionar citas médicas y acceder a la historia clínica, resultados y autorizaciones.",
            project6_tech_label: "Tecnologías:",
            project6_tech:
              "Aplicación web, formularios clínicos, autenticación, notificaciones",
            project6_updated: "Repositorio: público",
            project6_link_text: "Repositorio GitHub",

            project7_title: "💼 CV-Virtual-WSO",
            project7_description:"Currículum interactivo y portfolio personal en formato web.",
            project7_tech_label: "Tecnologías:",
            project7_tech: "HTML, CSS, JavaScript, despliegue en GitHub Pages",
            project7_updated: "Repositorio público",
            project7_link_text: "Repositorio GitHub",
            project8_title: "💼🌐 WCyberium - Página Web Entrega Final",
            project8_description: "Proyecto final desarrollado como página web, integrando conceptos de diseño y programación web.",
            project8_tech_label: "Tecnologías:",
            project8_tech: "HTML, CSS, JavaScript, despliegue en GitHub Pages",
            project8_updated: "Repositorio: público",
            project8_link_text: "Repositorio GitHub",
            project9_title: "💼🔐 Autenticación-2FA",
            project9_description: "Sistema con autenticación en dos factores (2FA) mediante TOTP y códigos de respaldo, con interfaz gráfica en Tkinter.",
            project9_tech_label: "Tecnologías:",
            project9_tech: "Python, Tkinter, TOTP, códigos QR, autenticación",
            project9_updated: "Repositorio: público",
            project9_link_text: "Repositorio GitHub"
          },
          en: {
            job_title: "Software Engineer",
            software_engineering: "Software Engineering",
            university: "Politécnico Grancolombiano University Institution",
            months: "October",
            graduated_june: "Graduated June 2025",
            institution: "COLSUBSIDIO Technological Education Institution",
            certification: "CERTIFICATION AND GRADUATED",
            night_mode: "Night Mode",
            day_mode: "Day Mode",
            select_theme: "Select Theme",
            select_language: "Select Language",
            dashboard: "Dashboard",
            profile: "Professional Profile",
            experience: "Work Experience",
            skills: "Skills",
            education: "Education",
            projects: "Projects",
            contact: "Contact",
            experience_years: "Years of Experience",
            projects_count: "Projects",
            skills_count: "Technologies",
            certifications: "Certifications",
            quick_summary: "Professional Summary",
            visual_report: "Visual Report",
            projects_by_category: "Projects by Category",
            tech_distribution: "Technology Distribution",
            skill_levels: "Skill Levels",
            education_chart: "Academic Formation",
            tech_stack: "Technology Stack",
            professional_summary:
              "Software Engineer with experience in full-stack development, software architecture and enterprise systems. Specialist in technology project management, databases and agile methodologies.",
            profile_description:
              "Software Engineer with experience in full-stack development, software architecture and enterprise systems. Specialist in technology project management, databases and agile methodologies, with emphasis on distributed systems, quality testing, IoT and continuous integration. Focused on innovation, team leadership and creating technological solutions that generate value and efficiency in organizations.",
            career_goals: "Career Goals",
            goal1:
              "Apply knowledge in enterprise software development and system architecture",
            goal2:
              "Contribute to digital transformation through innovative and scalable solutions",
            goal3:
              "Perform roles that combine technical development with team leadership",
            duration: "Duration",
            position: "Position",
            work_duration: "March 2017 - December 2024",
            job_position: "IT Database Management Assistant",
            responsibilities: "Responsibilities",
            resp1:
              "Administration of enterprise information systems and corporate databases",
            resp2:
              "Implementation of technological infrastructure improvements",
            resp3:
              "Specialized technical support and collaboration in digital transformation projects",
            technical_skills: "Programming Languages",
            web_skills: "Web Development",
            database_skills: "Databases",
            tools_skills: "Tools",
            methodologies_skills: "Methodologies",
            rest_apis: "REST APIs",
            institution: "Institution",
            date: "Date",
            gpa: "GPA",
            additional_training: "Additional Training",
            degree_title: "Software Engineering",
            university: "Politécnico Grancolombiano University Institution",
            graduation_date: "Graduated June 2025",
            cs_diploma: "Computer Science Diploma",
            cs_date: "October 2024",
            cs_duration: "100 hours",
            agile_methodologies: "Agile Methodologies (Scrum, Kanban, Lean)",
            colsubsidio_education: "COLSUBSIDIO Technological Education",
            agile_date: "April 2025",
            agile_duration: "48 hours",
            english_certification: "Technical English Certification",
            english_date: "September 2022",
            english_duration: "300 hours",
            project1_title:
              "Enterprise Architecture - Los Alpes Real Estate S.A.",
            project1_description:
              "Development of complete architectural model with AS-IS/TO-BE analysis",
            project1_tech:
              "Technologies: Java Enterprise, MySQL, Design Patterns",
            project2_title: "Distributed Client-Server System",
            project2_description:
              "Implementation with Java sockets and MySQL database",
            project2_achievements:
              "Handling 500+ concurrent connections, high availability",
            project3_title: "IoT Platform with Azure Hub",
            project3_description:
              "Connectivity for mobile devices, Raspberry Pi and Arduino",
            project3_tech: "Azure IoT, Python, C++, Real-time Dashboards",
            project4_title: "Interactive Web Portfolio",
            project4_description:
              "Digital CV with data visualizations and responsive design",
            project4_tech:
              "HTML5, CSS3, JavaScript, Chart.js, Responsive Design",
            project5_title: "Management Applications",
            project5_description:
              "Development of tools for business process optimization",
            project5_tech: "Java, Python, SQL, Agile Methodologies",
            technologies: "Technologies",
            achievements: "Achievements",
            contact_info: "Contact Information",
            location: "Bogotá D.C., Colombia",
            send_message: "Send Message",
            name: "Name",
            message: "Message",
            send: "Send",
            project6_title: "💼🏥 MediGest Pro - Integrated Medical Management System",
            project6_description: "Software to manage medical appointments and access medical records, results, and authorizations.",
            project6_tech_label: "Technologies:",
            project6_tech: "Web application, clinical forms, authentication, notifications",
            project6_updated: "Repository: public",
            project6_link_text: "GitHub Repository",
            project7_title: "💼 CV-Virtual-WSO",
            project7_description: "Interactive resume and personal portfolio in web format.",
            project7_tech_label: "Technologies:",
            project7_tech: "HTML, CSS, JavaScript, deployed on GitHub Pages",
            project7_updated: "Public repository",
            project7_link_text: "GitHub Repository",
            project8_title: "💼🌐 WCyberium - Página Web Entrega Final",
            project8_description: "Proyecto final desarrollado como página web, integrando conceptos de diseño y programación web.",
            project8_tech_label: "Tecnologías:",
            project8_tech: "HTML, CSS, JavaScript, despliegue en GitHub Pages",
            project8_updated: "Repositorio: público",
            project8_link_text: "Repositorio GitHub",
            project8_title: "💼🌐 WCyberium - Final Delivery Website",
            project8_description: "Final project developed as a website, integrating web design and programming concepts.",
            project8_tech_label: "Technologies:",
            project8_tech: "HTML, CSS, JavaScript, deployed on GitHub Pages",
            project8_updated: "Repository: public",
            project8_link_text: "GitHub Repository",
            project9_title: "💼🔐 Authentication-2FA",
            project9_description: "Two-factor authentication (2FA) system using TOTP and backup codes, with a Tkinter graphical interface.",
            project9_tech_label: "Technologies:",
            project9_tech: "Python, Tkinter, TOTP, QR codes, authentication",
            project9_updated: "Repository: public",
            project9_link_text: "GitHub Repository",

            // Navegación (Spanish keys for reference, but should be English)
            // Dashboard
            summary_text: "Software Engineer with experience in full-stack development, software architecture and enterprise systems. Specialist in technology project management, databases and agile methodologies.",
            professional_growth: "Professional Growth",
            complementary_tools: "Complementary Tools",
            // Perfil Profesional
            profile_text:
              "Software Engineer with experience in full-stack development, software architecture and enterprise systems. Specialist in technology project management, databases and agile methodologies, with emphasis on distributed systems, quality testing, IoT and continuous integration. Oriented to innovation, team leadership and the creation of technological solutions that generate value and efficiency in organizations.",
            // Experiencia Laboral
            duration: "Duración",
            position: "Cargo",
            colsubsidio_dates: "Marzo 2017 - Diciembre 2024",
            colsubsidio_position: "Auxiliar Gestión Base T.I.",
            colsubsidio_resp1:
              "Administración de sistemas de información empresariales y bases de datos corporativas",
            colsubsidio_resp2:
              "Implementación de mejoras en infraestructura tecnológica",
            colsubsidio_resp3:
              "Soporte técnico especializado y colaboración en proyectos de transformación digital",

            // Habilidades
            programming_languages: "Lenguajes de Programación",
            web_development: "Desarrollo Web",
            databases: "Bases de Datos",
            tools: "Herramientas",
            methodologies: "Metodologías",
            // Experiencia Laboral
            duration: "Duration",
            position: "Position",
            colsubsidio_dates: "March 2017 - December 2024",
            colsubsidio_position: "IT Base Management Assistant",
            colsubsidio_resp1:
              "Administration of business information systems and corporate databases",
            colsubsidio_resp2:
              "Implementation of improvements in technological infrastructure",
            colsubsidio_resp3:
              "Specialized technical support and collaboration in digital transformation projects",

            // Habilidades
            programming_languages: "Programming Languages",
            web_development: "Web Development",
            databases: "Databases",
            tools: "Tools",
            methodologies: "Methodologies",
          },
        };
      // Funciones de Navegación
      function showModule(moduleId) {
        // Ocultar todos los módulos
        document.querySelectorAll(".module").forEach((module) => {
          module.classList.remove("active");
        });

        // Mostrar el módulo seleccionado
        document.getElementById(moduleId).classList.add("active");

        // Actualizar botones de navegación
        document.querySelectorAll(".nav-btn").forEach((btn) => {
          btn.classList.remove("active");
        });

        // Encontrar y activar el botón correspondiente
        const buttons = document.querySelectorAll(".nav-btn");
        for (let i = 0; i < buttons.length; i++) {
          if (buttons[i].getAttribute("onclick").includes(moduleId)) {
            buttons[i].classList.add("active");
            break;
          }
        }
      }

      // Animaciones para los iconos de los botones
      function animateIcon(button, animationType) {
        const icon = button.querySelector("span:first-child");
        icon.style.animation = "none";
        void icon.offsetWidth; // Reiniciar la animación

        switch (animationType) {
          case "bounce":
            icon.style.animation = "bounce 1s";
            break;
          case "spin":
            icon.style.animation = "spin 1s";
            break;
          case "pulse":
            icon.style.animation = "pulse 1s";
            break;
          case "tada":
            icon.style.animation = "tada 1s";
            break;
          case "flash":
            icon.style.animation = "flash 1s";
            break;
          case "rubberBand":
            icon.style.animation = "rubberBand 1s";
            break;
        }

        // Mostrar notificación según el botón presionado
        let message = "";
        if (currentLanguage === "es") {
          switch (button.getAttribute("onclick").split("'")[1]) {
            case "dashboard":
              message = "📊 Navegando al Dashboard";
              break;
            case "profile":
              message = "👤 Viendo el Perfil Profesional";
              break;
            case "experience":
              message = "💼 Explorando la Experiencia Laboral";
              break;
            case "skills":
              message = "⚡ Consultando Habilidades";
              break;
            case "education":
              message = "🎓 Revisando Educación";
              break;
            case "projects":
              message = "🚀 Explorando Proyectos";
              break;
            case "contact":
              message = "📞 Accediendo a Contacto";
              break;
          }
        } else {
          switch (button.getAttribute("onclick").split("'")[1]) {
            case "dashboard":
              message = "📊 Navigating to Dashboard";
              break;
            case "profile":
              message = "👤 Viewing Professional Profile";
              break;
            case "experience":
              message = "💼 Exploring Work Experience";
              break;
            case "skills":
              message = "⚡ Checking Skills";
              break;
            case "education":
              message = "🎓 Reviewing Education";
              break;
            case "projects":
              message = "🚀 Exploring Projects";
              break;
            case "contact":
              message = "📞 Accessing Contact";
              break;
          }
        }
        showNotification(message);
      }

      // Definir las animaciones CSS adicionales
      const style = document.createElement("style");
      style.textContent = `
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
        
        @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.2); }
            100% { transform: scale(1); }
        }
        
        @keyframes tada {
            0% { transform: scale(1); }
            10%, 20% { transform: scale(0.9) rotate(-3deg); }
            30%, 50%, 70%, 90% { transform: scale(1.1) rotate(3deg); }
            40%, 60%, 80% { transform: scale(1.1) rotate(-3deg); }
            100% { transform: scale(1) rotate(0); }
        }
        
        @keyframes flash {
            0%, 50%, 100% { opacity: 1; }
            25%, 75% { opacity: 0; }
        }
        
        @keyframes rubberBand {
            0% { transform: scale(1); }
            30% { transform: scaleX(1.25) scaleY(0.75); }
            40% { transform: scaleX(0.75) scaleY(1.25); }
            60% { transform: scaleX(1.15) scaleY(0.85); }
            100% { transform: scale(1); }
        }
    `;
      document.head.appendChild(style);

      // Cambiar tema de color
      function changeTheme(theme) {
        document.body.classList.remove(
          "theme-blue",
          "theme-green",
          "theme-orange",
          "theme-red",
          "theme-yellow",
          "theme-purple"
        );
        document.body.classList.add(`theme-${theme}`);

        // Mostrar notificación del cambio de tema
        const themeNames = {
          blue: currentLanguage === "es" ? "Azul Rey" : "Royal Blue",
          green: currentLanguage === "es" ? "Verde Bosque" : "Forest Green",
          orange: currentLanguage === "es" ? "Naranja Fuerte" : "Strong Orange",
          red: currentLanguage === "es" ? "Rojo Fuerte" : "Strong Red",
          yellow: currentLanguage === "es" ? "Amarillo" : "Yellow",
          purple: currentLanguage === "es" ? "Morado" : "Purple",
        };

        showNotification(
          `🎨 ${
            currentLanguage === "es" ? "Tema cambiado a" : "Theme changed to"
          } ${themeNames[theme]}`
        );
      }

      // Cambiar idioma
      function changeLanguage(lang) {
        currentLanguage = lang;

        // Actualizar todos los textos con data-lang
        document.querySelectorAll("[data-lang]").forEach((element) => {
          const key = element.getAttribute("data-lang");
          if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
          }
        });

        // Actualizar el texto del botón de modo nocturno
        const nightModeBtn = document.getElementById("nightModeBtn");
        if (nightModeBtn) {
          const span = nightModeBtn.querySelector("span");
          if (span) {
            span.textContent = lang === "es" ? "Modo Nocturno" : "Night Mode";
          }
        }

        // Mostrar notificación del cambio de idioma
        showNotification(
          lang === "es"
            ? "🇪🇸 Idioma cambiado a Español"
            : "🇺🇸 Language changed to English"
        );
      }

      // Alternar modo nocturno
      function toggleNightMode() {
        nightMode = !nightMode;
        if (nightMode) {
          document.body.classList.add("night-mode");
          document.getElementById("nightModeBtn").innerHTML =
            "☀️ <span>" +
            (currentLanguage === "es" ? "Modo Diurno" : "Day Mode") +
            "</span>";
          showNotification(
            currentLanguage === "es"
              ? "🌙 Modo Nocturno Activado"
              : "🌙 Night Mode Enabled"
          );
        } else {
          document.body.classList.remove("night-mode");
          document.getElementById("nightModeBtn").innerHTML =
            "🌙 <span>" +
            (currentLanguage === "es" ? "Modo Nocturno" : "Night Mode") +
            "</span>";
          showNotification(
            currentLanguage === "es"
              ? "☀️ Modo Diurno Activado"
              : "☀️ Day Mode Enabled"
          );
        }
      }

      // Mostrar notificación
      function showNotification(message) {
        const notification = document.getElementById("notification");
        notification.textContent = message;
        notification.classList.add("show");

        setTimeout(() => {
          notification.classList.remove("show");
        }, 3000);
      }

      // Enviar mensaje (simulado)
      function sendMessage() {
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        if (!name || !email || !message) {
          showNotification(
            currentLanguage === "es"
              ? "❌ Por favor, complete todos los campos."
              : "❌ Please fill in all fields."
          );
          return;
        }

        showNotification(
          currentLanguage === "es"
            ? "✅ ¡Mensaje enviado con éxito!"
            : "✅ Message sent successfully!"
        );

        // Limpiar el formulario
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
      }

      // Inicialización
      document.addEventListener("DOMContentLoaded", function () {
        // Activar el primer módulo
        showModule("dashboard");

        // Añadir efecto de destello intermitente a los elementos
        setInterval(() => {
          const randomElement = document.querySelectorAll(
            ".card, .nav-btn, .stat-card, .skill-item, .contact-item" 
          );
          if (randomElement.length > 0) {
            const randomIndex = Math.floor(
              Math.random() * randomElement.length
            );
            randomElement[randomIndex].style.animation = "glow 1.5s";

            // Remover la animación después de que termine
            setTimeout(() => {
              randomElement[randomIndex].style.animation = "";
            }, 1500);
          }
        }, 3000);
      });

      // Bar Chart

const ctxBar = document.getElementById('barChart').getContext('2d');

// Gradientes para las barras
const webGradient = ctxBar.createLinearGradient(0, 0, 0, 400);
webGradient.addColorStop(0, 'rgba(100, 181, 246, 0.9)');
webGradient.addColorStop(1, 'rgba(33, 150, 243, 0.6)');

const backendGradient = ctxBar.createLinearGradient(0, 0, 0, 400);
backendGradient.addColorStop(0, 'rgba(129, 199, 132, 0.9)');
backendGradient.addColorStop(1, 'rgba(76, 175, 80, 0.6)');

const gameGradient = ctxBar.createLinearGradient(0, 0, 0, 400);
gameGradient.addColorStop(0, 'rgba(255, 183, 77, 0.9)');
gameGradient.addColorStop(1, 'rgba(255, 152, 0, 0.6)');

const toolsGradient = ctxBar.createLinearGradient(0, 0, 0, 400);
toolsGradient.addColorStop(0, 'rgba(186, 104, 200, 0.9)');
toolsGradient.addColorStop(1, 'rgba(156, 39, 176, 0.6)');

const securityGradient = ctxBar.createLinearGradient(0, 0, 0, 400);
securityGradient.addColorStop(0, 'rgba(239, 83, 80, 0.9)');
securityGradient.addColorStop(1, 'rgba(244, 67, 54, 0.6)');

new Chart(ctxBar, {
    type: 'bar',
    data: {
        labels: ['Desarrollo Web', 'Backend/APIs', 'Juegos', 'Herramientas', 'Seguridad'],
        datasets: [{
            label: 'Número de Proyectos',
            data: [4, 2, 1, 1, 1], // Basado en tus proyectos categorizados
            backgroundColor: [
                webGradient,      // Desarrollo Web
                backendGradient,  // Backend/APIs
                gameGradient,     // Juegos
                toolsGradient,    // Herramientas
                securityGradient  // Seguridad
            ],
            borderColor: [
                '#2196f3',  // Azul para Web
                '#4caf50',  // Verde para Backend
                '#ff9800',  // Naranja para Juegos
                '#9c27b0',  // Morado para Herramientas
                '#f44336'   // Rojo para Seguridad
            ],
            borderWidth: 2,
            borderRadius: 8,
            borderSkipped: false,
            hoverBackgroundColor: [
                'rgba(100, 181, 246, 1)',
                'rgba(129, 199, 132, 1)',
                'rgba(255, 183, 77, 1)',
                'rgba(186, 104, 200, 1)',
                'rgba(239, 83, 80, 1)'
            ],
            hoverBorderColor: '#ffffff',
            hoverBorderWidth: 3
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: true,
                position: 'top',
                labels: {
                    color: '#ffffff',
                    font: {
                        size: 14,
                        weight: 'bold'
                    },
                    usePointStyle: true,
                    pointStyle: 'rect'
                }
            },
            tooltip: {
                backgroundColor: 'rgba(0, 0, 0, 0.9)',
                titleColor: '#ffffff',
                bodyColor: '#64b5f6',
                borderColor: '#2196f3',
                borderWidth: 2,
                cornerRadius: 12,
                displayColors: true,
                callbacks: {
                    title: function(context) {
                        return `${context[0].label}`;
                    },
                    label: function(context) {
                        const value = context.parsed.y;
                        const total = context.dataset.data.reduce((a, b) => a + b, 0);
                        const percentage = ((value / total) * 100).toFixed(1);
                        return `Proyectos: ${value} (${percentage}%)`;
                    },
                    afterLabel: function(context) {
                        const category = context.label;
                        const projects = {
                            'Desarrollo Web': ['WCyberium.GitHub.io', 'Medicina Ágil - Kalho', 'CV-Virtual-WSO', 'Gestor de tareas'],
                            'Backend/APIs': ['Proyecto Docker Multi-contenedor', 'GenerateInfoFiles'],
                            'Juegos': ['Juego de memoria'],
                            'Herramientas': ['Gestor de tareas'],
                            'Seguridad': ['Autenticación-2FA']
                        };
                        
                        if (projects[category]) {
                            return `Incluye: ${projects[category].slice(0, 2).join(', ')}${projects[category].length > 2 ? '...' : ''}`;
                        }
                        return '';
                    }
                }
            }
        },
        scales: {
            x: {
                grid: {
                    color: 'rgba(255, 255, 255, 0.1)',
                    drawBorder: false
                },
                ticks: {
                    color: '#ffffff',
                    font: {
                        size: 11,
                        weight: 'bold'
                    },
                    maxRotation: 45,
                    minRotation: 0
                }
            },
            y: {
                grid: {
                    color: 'rgba(255, 255, 255, 0.1)',
                    drawBorder: false
                },
                ticks: {
                    color: '#ffffff',
                    font: {
                        size: 12,
                        weight: 'bold'
                    },
                    stepSize: 1,
                    callback: function(value) {
                        return `${value} proyecto${value !== 1 ? 's' : ''}`;
                    }
                },
                beginAtZero: true,
                max: 5
            }
        },
        interaction: {
            intersect: false,
            mode: 'index'
        },
        elements: {
            bar: {
                borderWidth: 2
            }
        },
        animation: {
            duration: 2000,
            easing: 'easeInOutQuart',
            delay: (context) => {
                return context.dataIndex * 200;
            }
        },
        onHover: (event, elements) => {
            event.native.target.style.cursor = elements.length > 0 ? 'pointer' : 'default';
        }
    }
});

// Animación de entrada para el contenedor del gráfico
setTimeout(() => {
    const chartContainer = document.querySelector('.chart-container');
    if (chartContainer) {
        chartContainer.style.opacity = '0';
        chartContainer.style.transform = 'translateY(30px)';
        chartContainer.style.transition = 'all 0.8s ease';
        
        setTimeout(() => {
            chartContainer.style.opacity = '1';
            chartContainer.style.transform = 'translateY(0)';
        }, 100);
    }
}, 500);
      
      // Pie Chart - Formación Complementaria
      // Script para el gráfico de distribución de tecnologías
      // Configuración del gráfico de pastel

const ctxPie = document.getElementById('pieChart').getContext('2d');
     // Datos basados en tus habilidades técnicas y proyectos
const pieData = {
    labels: [
        '📜 JavaScript',
        '🐍 Python', 
        '☕ Java',
        '🎨 HTML/CSS',
        '🗃️ SQL',
        '⚛️ React.js',
        '🐳 Docker',
        '📝 Git/GitHub',
        '☁️ Azure/Cloud',
        '🔄 Metodologías'
    ],
    datasets: [{
        label: 'Distribución de Tecnologías',
        data: [20, 15, 12, 18, 10, 8, 5, 7, 3, 2], // Porcentajes basados en tu experiencia
        backgroundColor: [
            'rgba(255, 193, 7, 0.8)',   // JavaScript - Amarillo
            'rgba(52, 168, 83, 0.8)',   // Python - Verde
            'rgba(244, 81, 30, 0.8)',   // Java - Naranja
            'rgba(33, 150, 243, 0.8)',  // HTML/CSS - Azul
            'rgba(156, 39, 176, 0.8)',  // SQL - Púrpura
            'rgba(0, 188, 212, 0.8)',   // React - Cian
            'rgba(96, 125, 139, 0.8)',  // Docker - Gris azul
            'rgba(76, 175, 80, 0.8)',   // Git - Verde claro
            'rgba(63, 81, 181, 0.8)',   // Azure - Índigo
            'rgba(233, 30, 99, 0.8)'    // Metodologías - Rosa
        ],
        borderColor: [
            '#FFC107',
            '#34A853',
            '#F4511E',
            '#2196F3',
            '#9C27B0',
            '#00BCD4',
            '#607D8B',
            '#4CAF50',
            '#3F51B5',
            '#E91E63'
        ],
        borderWidth: 3,
        hoverBorderWidth: 4,
        hoverBorderColor: '#ffffff',
        hoverBackgroundColor: [
            'rgba(255, 193, 7, 1)',
            'rgba(52, 168, 83, 1)',
            'rgba(244, 81, 30, 1)',
            'rgba(33, 150, 243, 1)',
            'rgba(156, 39, 176, 1)',
            'rgba(0, 188, 212, 1)',
            'rgba(96, 125, 139, 1)',
            'rgba(76, 175, 80, 1)',
            'rgba(63, 81, 181, 1)',
            'rgba(233, 30, 99, 1)'
        ]
    }]
};

const pieConfig = {
    type: 'pie',
    data: pieData,
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: true,
                position: 'right',
                labels: {
                    color: '#ffffff',
                    font: {
                        size: 11,
                        weight: 'bold'
                    },
                    usePointStyle: true,
                    pointStyle: 'circle',
                    padding: 12,
                    generateLabels: function(chart) {
                        const data = chart.data;
                        if (data.labels.length && data.datasets.length) {
                            return data.labels.map((label, index) => {
                                const dataset = data.datasets[0];
                                const value = dataset.data[index];
                                return {
                                    text: `${label} (${value}%)`,
                                    fillStyle: dataset.backgroundColor[index],
                                    strokeStyle: dataset.borderColor[index],
                                    lineWidth: dataset.borderWidth,
                                    hidden: false,
                                    index: index
                                };
                            });
                        }
                        return [];
                    }
                }
            },
            tooltip: {
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                titleColor: '#ffffff',
                bodyColor: '#64b5f6',
                borderColor: '#2196f3',
                borderWidth: 1,
                cornerRadius: 10,
                displayColors: true,
                callbacks: {
                    title: function(context) {
                        return context[0].label;
                    },
                    label: function(context) {
                        const percentage = context.parsed;
                        const total = context.dataset.data.reduce((a, b) => a + b, 0);
                        const actualPercentage = ((percentage / total) * 100).toFixed(1);
                        return [
                            `Porcentaje: ${percentage}%`,
                            `Uso relativo: ${actualPercentage}%`
                        ];
                    },
                    afterLabel: function(context) {
                        const techDescriptions = {
                            '📜 JavaScript': 'Frontend, interactividad, múltiples proyectos',
                            '🐍 Python': 'Scripts, automatización, backend',
                            '☕ Java': 'Desarrollo backend, POO',
                            '🎨 HTML/CSS': 'Estructura y diseño web',
                            '🗃️ SQL': 'Gestión de bases de datos',
                            '⚛️ React.js': 'Componentes y SPAs',
                            '🐳 Docker': 'Containerización de aplicaciones',
                            '📝 Git/GitHub': 'Control de versiones',
                            '☁️ Azure/Cloud': 'Servicios en la nube',
                            '🔄 Metodologías': 'Scrum, Kanban, Lean'
                        };
                        return techDescriptions[context.label] || '';
                    }
                }
            }
        },
        elements: {
            arc: {
                borderAlign: 'center'
            }
        },
        animation: {
            animateRotate: true,
            animateScale: true,
            duration: 2000,
            easing: 'easeInOutQuart'
        },
        interaction: {
            intersect: true,
            mode: 'point'
        }
    }
};

// Crear el gráfico de pastel
new Chart(ctxPie, pieConfig);

// Animación de entrada para las estadísticas
setTimeout(() => {
    const statItems = document.querySelectorAll('.stat-item');
    statItems.forEach((item, index) => {
        setTimeout(() => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(20px)';
            item.style.transition = 'all 0.6s ease';
            
            setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            }, 50);
        }, index * 200);
    });
}, 1000);

// Función opcional para actualizar los datos del gráfico
function updateTechDistribution(newData) {
    const chart = Chart.getChart('pieChart');
    if (chart) {
        chart.data.datasets[0].data = newData;
        chart.update();
    }
}

      // Line Chart
       // Script para el gráfico de Habilidades Técnicas
// Configuración del gráfico
const ctxLine = document.getElementById('lineChart').getContext('2d');

// Gradiente para la línea
const lineGradient = ctxLine.createLinearGradient(0, 0, 0, 400);
lineGradient.addColorStop(0, 'rgba(100, 181, 246, 0.8)');
lineGradient.addColorStop(1, 'rgba(33, 150, 243, 0.1)');

// Gradiente para el borde
const borderGradient = ctxLine.createLinearGradient(0, 0, 0, 400);
borderGradient.addColorStop(0, '#64b5f6');
borderGradient.addColorStop(1, '#2196f3');

new Chart(ctxLine, {
    type: 'radar',
    data: {
        labels: [
            '☕ Java', 
            '🐍 Python', 
            '📜 JavaScript', 
            '🗃️ SQL',
            '🎨 HTML5/CSS3',
            '⚛️ React.js',
            '🔌 APIs REST',
            '🐬 MySQL',
            '🐘 PostgreSQL',
            '📝 Git/GitHub',
            '🐳 Docker',
            '☁️ Azure IoT',
            '🔄 Metodologías Ágiles'
        ],
        datasets: [{
            label: 'Nivel de Competencia',
            data: [7, 8, 9, 8, 9, 7, 8, 8, 7, 9, 6, 5, 8], // Niveles basados en tus proyectos
            borderColor: '#2196f3',
            backgroundColor: 'rgba(33, 150, 243, 0.2)',
            borderWidth: 3,
            pointBackgroundColor: '#ffffff',
            pointBorderColor: '#2196f3',
            pointBorderWidth: 3,
            pointRadius: 6,
            pointHoverRadius: 10,
            pointHoverBackgroundColor: '#64b5f6',
            pointHoverBorderColor: '#ffffff',
            pointHoverBorderWidth: 3,
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: true,
                position: 'top',
                labels: {
                    color: '#ffffff',
                    font: {
                        size: 14,
                        weight: 'bold'
                    },
                    usePointStyle: true,
                    pointStyle: 'circle'
                }
            },
            tooltip: {
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                titleColor: '#ffffff',
                bodyColor: '#64b5f6',
                borderColor: '#2196f3',
                borderWidth: 1,
                cornerRadius: 10,
                displayColors: false,
                callbacks: {
                    title: function(context) {
                        return `${context[0].label}`;
                    },
                    label: function(context) {
                        const level = context.parsed.r;
                        let description = '';
                        
                        // Descripciones personalizadas basadas en tus proyectos
                        const skillDescriptions = {
                            '☕ Java': 'Desarrollo backend, proyectos académicos',
                            '🐍 Python': 'Scripts, automatización, análisis de datos',
                            '📜 JavaScript': 'Frontend interactivo, DOM manipulation',
                            '🗃️ SQL': 'Gestión de BD, consultas complejas',
                            '🎨 HTML5/CSS3': 'Diseño web responsivo, UI moderna',
                            '⚛️ React.js': 'SPAs, componentes reutilizables',
                            '🔌 APIs REST': 'Integración de servicios, consumo APIs',
                            '🐬 MySQL': 'Bases de datos relacionales',
                            '🐘 PostgreSQL': 'BD avanzadas, consultas optimizadas',
                            '📝 Git/GitHub': 'Control de versiones, colaboración',
                            '🐳 Docker': 'Containerización, multi-contenedores',
                            '☁️ Azure IoT': 'Servicios en la nube, IoT Hub',
                            '🔄 Metodologías Ágiles': 'Scrum, Kanban, Lean, PSP/TSP'
                        };
                        
                        description = skillDescriptions[context.label] || '';
                        
                        return [
                            `Nivel: ${level}/10`,
                            description
                        ];
                    }
                }
            }
        },
        scales: {
            r: {
                beginAtZero: true,
                min: 0,
                max: 10,
                ticks: {
                    stepSize: 2,
                    color: '#ffffff',
                    backdropColor: 'transparent',
                    font: {
                        size: 10,
                        weight: 'bold'
                    }
                },
                grid: {
                    color: 'rgba(255, 255, 255, 0.2)',
                    lineWidth: 1
                },
                angleLines: {
                    color: 'rgba(255, 255, 255, 0.2)',
                    lineWidth: 1
                },
                pointLabels: {
                    color: '#ffffff',
                    font: {
                        size: 11,
                        weight: 'bold'
                    }
                }
            }
        },
        interaction: {
            intersect: false,
            mode: 'point'
        },
        animation: {
            duration: 2000,
            easing: 'easeInOutQuart'
        }
    }
});

// Animación de entrada para las estadísticas
setTimeout(() => {
    const statItems = document.querySelectorAll('.stat-item');
    statItems.forEach((item, index) => {
        setTimeout(() => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(20px)';
            item.style.transition = 'all 0.6s ease';
            
            setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            }, 50);
        }, index * 200);
    });
}, 1000);

// Función para actualizar los datos del gráfico (opcional)
function updateSkillLevel(skillIndex, newLevel) {
    const chart = Chart.getChart('lineChart');
    if (chart) {
        chart.data.datasets[0].data[skillIndex] = newLevel;
        chart.update();
    }
}

      // Doughnut Chart
      new Chart(document.getElementById("doughnutChart"), {
    type: "doughnut",
    data: {
      labels: [
        "Ingeniería de Software",
        "Diplomado Ciencias de la Computación",
        "Metodologías Ágiles",
        " ENGLISH DOT WORKS 4"
      ],
      datasets: [
        {
          data: [5, 3, 1, 2], // Peso relativo (puedes cambiarlo por horas si deseas)
          backgroundColor: ["#001c49ff", "#00462eff", "#f59e0b", "#c90000ff"],
          borderColor: "#111827",
          borderWidth: 2
        },
      ],
    },
    options: {
      plugins: {
        legend: {
          position: "top", // 🔹 Títulos arriba
          labels: {
            usePointStyle: true, // 🔹 Que se vea un circulito de color
            pointStyle: "circle",
            color: "#fff",
            font: {
              size: 10
            }
          }
        },
        tooltip: {
          callbacks: {
            label: function (context) {
              let label = context.label || "";
              let detalles = "";

               if (label.includes("Ingeniería de Software")) {
                details = [
                  "🏫 Institución: Politécnico Grancolombiano",
                  "📅 Fecha: Graduado Junio 2025",
                  "🎓 Pregrado (PGA 4.71/5.0)"
                ];
              } else if (label.includes("Ciencias de la Computación")) {
                details = [
                  "🏫 Institución: Politécnico Grancolombiano",
                  "📅 Fecha: Octubre 2024",
                  "⏱️ Duración: 100 horas"
                ];
              } else if (label.includes("Metodologías Ágiles")) {
                details = [
                  "🏫 Institución: CET",
                  "📅 Fecha: Abril 2025",
                  "⏱️ Duración: 48 horas"
                ];
              } else if (label.includes(" ENGLISH DOT WORKS 4")) {
                details = [
                  "🏫 Institución: SENA",
                  "📅 Fecha: Septiembre 2022",
                  "⏱️ Duración: 300 horas"
                ];
              }

              return [label, ...details]; // título + detalles
            },
          },
        },
      },
    },
  });
     // Interactive Stats Cards Effects
document.addEventListener('DOMContentLoaded', function() {
    
    // Función para animar números con efecto contador
    function animateNumber(element, targetNumber, duration = 2000) {
        const startNumber = 0;
        const increment = targetNumber / (duration / 16);
        let currentNumber = startNumber;
        
        const timer = setInterval(() => {
            currentNumber += increment;
            if (currentNumber >= targetNumber) {
                element.textContent = targetNumber + (targetNumber > 1 ? '+' : '');
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(currentNumber) + '+';
            }
        }, 16);
    }
    
    // Configuración de efectos para cada card
    const statCards = document.querySelectorAll('.stat-card');
    const cardConfigs = [
        { number: 2, suffix: '+', color: '#64b5f6', icon: '💼' },
        { number: 15, suffix: '+', color: '#81c784', icon: '🚀' },
        { number: 10, suffix: '+', color: '#ffb74d', icon: '⚡' },
        { number: 4, suffix: '', color: '#ba68c8', icon: '🏆' }
    ];
    
    statCards.forEach((card, index) => {
        const config = cardConfigs[index];
        
        // Agregar efectos CSS dinámicos
        card.style.position = 'relative';
        card.style.overflow = 'hidden';
        card.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
        card.style.cursor = 'pointer';
        card.style.border = '1px solid rgba(255, 255, 255, 0.1)';
        
        // Crear elemento de brillo/shine
        const shine = document.createElement('div');
        shine.className = 'card-shine';
        shine.style.cssText = `
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(
                90deg,
                transparent,
                rgba(255, 255, 255, 0.2),
                transparent
            );
            transition: left 0.6s ease;
            pointer-events: none;
        `;
        card.appendChild(shine);
        
        // Crear partículas flotantes
        const particlesContainer = document.createElement('div');
        particlesContainer.className = 'particles-container';
        particlesContainer.style.cssText = `
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            opacity: 0;
            transition: opacity 0.3s ease;
        `;
        
        // Generar partículas
        for (let i = 0; i < 5; i++) {
            const particle = document.createElement('div');
            particle.style.cssText = `
                position: absolute;
                width: 4px;
                height: 4px;
                background: ${config.color};
                border-radius: 50%;
                opacity: 0.9;
                animation: float-${i} 3s infinite linear;
            `;
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';
            particlesContainer.appendChild(particle);
        }
        card.appendChild(particlesContainer);
        
        // Crear indicador de progreso circular
        const progressRing = document.createElement('div');
        progressRing.className = 'progress-ring';
        progressRing.innerHTML = `
            <svg width="60" height="60" style="position: absolute; top: 10px; right: 10px; opacity: 2.0;">
                <circle cx="30" cy="30" r="25" fill="none" stroke="hsla(0, 0%, 100%, 1.00)" stroke-width="2"/>
                <circle cx="30" cy="30" r="25" fill="none" stroke="#ec3a03ff" stroke-width="1" 
                        stroke-dasharray="157" stroke-dashoffset="157" 
                        style="transform: rotate(-90deg); transform-origin: 50% 50%; transition: stroke-dashoffset 2s ease;"/>
            </svg>
        `;
        card.appendChild(progressRing);
        
        // Agregar icono animado
        const iconElement = document.createElement('div');
        iconElement.className = 'stat-icon';
        iconElement.innerHTML = config.icon;
        iconElement.style.cssText = `
            position: absolute;
            top: 15px;
            left: 15px;
            font-size: 20px;
            opacity: 0.8;
            transition: all 0.3s ease;
            transform: scale(2);
        `;
        card.appendChild(iconElement);
        
        // Event Listeners
        card.addEventListener('mouseenter', function() {
            // Efecto de elevación y brillo
            this.style.transform = 'translateY(-8px) scale(1.02)';
            this.style.boxShadow = `0 20px 40px rgba(${config.color.replace('#', '').match(/.{2}/g).map(x => parseInt(x, 16)).join(', ')}, 0.3)`;
            this.style.borderColor = config.color;
            
            // Activar brillo
            shine.style.left = '100%';
            
            // Mostrar partículas
            particlesContainer.style.opacity = '1';
            
            // Animar progreso circular
            const circle = progressRing.querySelector('circle:last-child');
            const progress = (config.number / 20) * 157; // Escala relativa
            circle.style.strokeDashoffset = `${157 - progress}`;
            
            // Animar icono
            iconElement.style.transform = 'scale(1.2) rotate(10deg)';
            iconElement.style.color = config.color;
        });
        
        card.addEventListener('mouseleave', function() {
            // Restaurar estado normal
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
            this.style.borderColor = 'rgba(255, 255, 255, 0.1)';
            
            // Ocultar partículas
            particlesContainer.style.opacity = '0';
            
            // Restaurar progreso circular
            const circle = progressRing.querySelector('circle:last-child');
            circle.style.strokeDashoffset = '157';
            
            // Restaurar icono
            iconElement.style.transform = 'scale(1) rotate(0deg)';
            iconElement.style.color = 'inherit';
        });
        
        // Efecto de click con ondas
        card.addEventListener('click', function() {
            const ripple = document.createElement('div');
            ripple.style.cssText = `
                position: absolute;
                border-radius: 50%;
                background: ${config.color};
                opacity: 0.6;
                animation: ripple-effect 0.8s ease-out;
                pointer-events: none;
                width: 0;
                height: 0;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
            `;
            this.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 800);
            
            // Reiniciar animación de números
            const numberElement = this.querySelector('.stat-number');
            const originalText = numberElement.textContent;
            numberElement.textContent = '0';
            animateNumber(numberElement, config.number, 1500);
        });
        
        // Animación inicial con retraso escalonado
        setTimeout(() => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            
            setTimeout(() => {
                card.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
                
                // Animar número inicial
                const numberElement = card.querySelector('.stat-number');
                numberElement.textContent = '0';
                setTimeout(() => {
                    animateNumber(numberElement, config.number, 2000 + index * 300);
                }, 300);
            }, 100);
        }, index * 200);
    });
    
    // Agregar estilos CSS para animaciones
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple-effect {
            0% {
                width: 0;
                height: 0;
                opacity: 0.6;
            }
            100% {
                width: 200px;
                height: 200px;
                opacity: 0;
            }
        }
        
        @keyframes float-0 {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes float-1 {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-15px) rotate(-180deg); }
        }
        
        @keyframes float-2 {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-25px) rotate(90deg); }
        }
        
        @keyframes float-3 {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-18px) rotate(-90deg); }
        }
        
        @keyframes float-4 {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-22px) rotate(270deg); }
        }
        
        .stat-card {
            will-change: transform;
        }
        
        .stat-card:hover .stat-number {
            text-shadow: 0 0 20px currentColor;
        }
        
        .stat-card:active {
            transform: translateY(-5px) scale(0.98) !important;
        }
    `;
    document.head.appendChild(style);
    
    // Efecto de paralaje suave en scroll
    let ticking = false;
    
    function updateParallax() {
        const scrolled = window.pageYOffset;
        statCards.forEach((card, index) => {
            const rate = scrolled * -0.3;
            const yPos = Math.round(rate * (index + 1) * 0.1);
            card.style.transform += ` translateZ(${yPos}px)`;
        });
        ticking = false;
    }
    
    window.addEventListener('scroll', function() {
        if (!ticking) {
            requestAnimationFrame(updateParallax);
            ticking = true;
        }
    });
    
    console.log('✨ Interactive Stats Cards initialized successfully!');
});
