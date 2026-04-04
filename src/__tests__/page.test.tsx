import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

describe("DocFlow Landing Page", () => {
  it("rend la page sans crash", () => {
    const { container } = render(<Home />);
    expect(container).toBeTruthy();
  });

  it("affiche le titre hero", () => {
    render(<Home />);
    expect(screen.getAllByText(/Fini les relances/).length).toBeGreaterThanOrEqual(1);
  });

  it("affiche les 3 plans tarifaires", () => {
    render(<Home />);
    expect(screen.getAllByText("Starter").length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText("Pro").length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText("Cabinet").length).toBeGreaterThanOrEqual(1);
  });

  it("affiche les bons prix", () => {
    render(<Home />);
    expect(screen.getAllByText("49,99").length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText("89,99").length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText("199,99").length).toBeGreaterThanOrEqual(1);
  });

  it("affiche le CTA principal", () => {
    render(<Home />);
    expect(screen.getAllByText(/Essayer gratuitement/).length).toBeGreaterThan(0);
  });

  it("affiche la nav avec le logo DocFlow", () => {
    render(<Home />);
    expect(screen.getAllByText("DocFlow").length).toBeGreaterThanOrEqual(1);
  });

  it("affiche les fonctionnalites", () => {
    render(<Home />);
    expect(screen.getAllByText("Checklist dynamique").length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText(/OCR/).length).toBeGreaterThanOrEqual(1);
  });

  it("affiche les stats probleme", () => {
    render(<Home />);
    expect(screen.getAllByText("6h").length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText("4 outils").length).toBeGreaterThanOrEqual(1);
  });

  it("affiche les trust badges", () => {
    render(<Home />);
    expect(screen.getAllByText("Sans engagement").length).toBeGreaterThanOrEqual(1);
  });

  it("affiche le formulaire pilote", () => {
    render(<Home />);
    expect(screen.getAllByPlaceholderText("Jean Dupont").length).toBeGreaterThanOrEqual(1);
  });
});
