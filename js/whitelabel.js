/**
 * WhiteLabelModule - Sistema de Personalização Institucional para Escolas & Professores
 * Ensino Soberano Kids (Anime Edition)
 * Permite cadastrar logotipo próprio, cores institucionais, dados da escola,
 * professor e turma, com persistência no localStorage e multi-perfis.
 */

(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.WhiteLabelModule = factory();
  }
})(typeof self !== 'undefined' ? self : this, function () {

  const STORAGE_KEY = "ensino_soberano_whitelabel_settings";
  const PROFILES_KEY = "ensino_soberano_whitelabel_profiles";

  const DEFAULT_SETTINGS = {
    schoolName: "Ensino Soberano",
    schoolSubtitle: "Plataforma Pedagógica e Cognitiva Infantil",
    campus: "Sede Principal",
    teacherName: "Prof. Responsável",
    gradeClass: "1º Ano Fundamental",
    schoolYear: "2026",
    period: "1º Bimestre",
    primaryColor: "#4f46e5",   // Indigo moderno
    secondaryColor: "#f43f5e", // Rosa anime soberano
    logoDataUrl: null,         // Imagem em base64 da escola
    showSchoolLogo: true,
    hankoText: "SUGOI! 🌸\nNOTA 10\nENSINO SOBERANO"
  };

  function getSettings() {
    try {
      if (typeof localStorage !== "undefined") {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
          return Object.assign({}, DEFAULT_SETTINGS, JSON.parse(saved));
        }
      }
    } catch (e) {
      console.warn("Erro ao ler configurações do localStorage:", e);
    }
    return Object.assign({}, DEFAULT_SETTINGS);
  }

  function saveSettings(settings) {
    try {
      const merged = Object.assign({}, getSettings(), settings);
      if (typeof localStorage !== "undefined") {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(merged));
      }
      applyToDom();
      return merged;
    } catch (e) {
      console.error("Erro ao salvar configurações no localStorage:", e);
      return settings;
    }
  }

  function resetToDefault() {
    try {
      if (typeof localStorage !== "undefined") {
        localStorage.removeItem(STORAGE_KEY);
      }
    } catch (e) {}
    applyToDom();
    return DEFAULT_SETTINGS;
  }

  function listProfiles() {
    try {
      if (typeof localStorage !== "undefined") {
        const profiles = localStorage.getItem(PROFILES_KEY);
        return profiles ? JSON.parse(profiles) : {};
      }
    } catch (e) {}
    return {};
  }

  function saveProfile(name) {
    if (!name || typeof name !== "string") return false;
    try {
      const profiles = listProfiles();
      profiles[name.trim()] = getSettings();
      if (typeof localStorage !== "undefined") {
        localStorage.setItem(PROFILES_KEY, JSON.stringify(profiles));
      }
      return true;
    } catch (e) {
      return false;
    }
  }

  function loadProfile(name) {
    try {
      const profiles = listProfiles();
      if (profiles[name]) {
        saveSettings(profiles[name]);
        return true;
      }
    } catch (e) {}
    return false;
  }

  function deleteProfile(name) {
    try {
      const profiles = listProfiles();
      if (profiles[name]) {
        delete profiles[name];
        if (typeof localStorage !== "undefined") {
          localStorage.setItem(PROFILES_KEY, JSON.stringify(profiles));
        }
        return true;
      }
    } catch (e) {}
    return false;
  }

  /**
   * Atualiza a identidade visual no DOM da folha de atividade e elementos da interface
   */
  function applyToDom() {
    if (typeof document === "undefined") return;

    const s = getSettings();

    // 1. Atualizar nome da escola na folha atual
    const schoolPreview = document.getElementById("preview-school");
    if (schoolPreview) {
      schoolPreview.textContent = s.schoolName || "Ensino Soberano";
    }

    // Input da barra lateral se existir
    const schoolInput = document.getElementById("sheet-school");
    if (schoolInput && document.activeElement !== schoolInput) {
      schoolInput.value = s.schoolName || "Ensino Soberano";
    }

    // 2. Logotipo no cabeçalho da folha
    const schoolHeaderContainer = document.querySelector(".student-header .font-heading");
    if (schoolHeaderContainer) {
      let logoContainer = document.getElementById("worksheet-school-logo");
      if (!logoContainer) {
        logoContainer = document.createElement("span");
        logoContainer.id = "worksheet-school-logo";
        logoContainer.className = "inline-flex items-center mr-1.5 align-middle";
        schoolHeaderContainer.insertBefore(logoContainer, schoolHeaderContainer.firstChild);
      }

      if (s.logoDataUrl && s.showSchoolLogo) {
        logoContainer.innerHTML = `<img src="${s.logoDataUrl}" alt="${s.schoolName}" class="h-6 w-auto max-w-[80px] object-contain rounded inline-block">`;
      } else {
        logoContainer.innerHTML = `<span class="text-amber-500">👑</span>`;
      }
    }

    // 3. Atualizar carimbo Hanko
    const hankoTextEl = document.getElementById("preview-hanko-text");
    if (hankoTextEl) {
      const cleanSchool = (s.schoolName || "ENSINO SOBERANO").toUpperCase().substring(0, 20);
      hankoTextEl.innerHTML = `SUGOI! 🌸<br>NOTA 10<br><span class="text-[7px] text-red-500 font-bold">${cleanSchool}</span>`;
    }

    // 4. Injetar variáveis CSS customizadas para a escola
    if (document.documentElement && document.documentElement.style && typeof document.documentElement.style.setProperty === "function") {
      document.documentElement.style.setProperty("--school-primary", s.primaryColor || "#4f46e5");
      document.documentElement.style.setProperty("--school-secondary", s.secondaryColor || "#f43f5e");
    }
  }

  return {
    getSettings,
    saveSettings,
    resetToDefault,
    listProfiles,
    saveProfile,
    loadProfile,
    deleteProfile,
    applyToDom,
    DEFAULT_SETTINGS
  };
});
