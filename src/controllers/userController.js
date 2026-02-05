// Mock user controller

export const getMockUser1 = (req, res) => {
    const mockUser1 = {
        id: 1,
        name: 'John Doe',
        email: 'john.doe@example.com',
        role: 'User'
    };
    res.json(mockUser1);
};

export const getMockUser2 = (req, res) => {
    const mockUser2 = {
        id: 2,
        name: 'Jane Smith',
        email: 'jane.smith@example.com',
        role: 'Admin'
    };
    res.json(mockUser2);
};