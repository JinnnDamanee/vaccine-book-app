import HospitalCatalog from "@/components/HospitalCatalog";
import { render, screen, waitFor } from "@testing-library/react";

const hospitalBase = {
    address: "test",
    district: "test",
    id: "1",
    name: "test",
    postalcode: "test",
    province: "test",
    tel: "test",
    picture: "https://drive.google.com/uc?id=1nekIjHnFtGMdbmsYrBao55dGvtYER62P",
};

const hospitalResult = [
    hospitalBase,
    {
        ...hospitalBase,
        id: "2",
        picture:
            "https://drive.google.com/uc?id=15kWfVT9wchkH3I9BHKeqftTmj0bFgJtu",
    },
    {
        ...hospitalBase,
        id: "3",
        picture:
            "https://drive.google.com/uc?id=1jit7S4cRATEfDi64YjjK1ur2jGlZYs2e",
    },
];

describe("HospitalCatalog", () => {
    it("should render", async () => {
        const hospitalCatalog = await HospitalCatalog({
            hospitalLoading: Promise.resolve(hospitalResult),
        });
        render(hospitalCatalog);
        await waitFor(() => {
            const hospitalImages = screen.getAllByRole("img");
            expect(hospitalImages.length).toBe(3);
        });
    });
});
