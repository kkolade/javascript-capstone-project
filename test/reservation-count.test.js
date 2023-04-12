describe('storedReservations function', () => {
  it('should create HTML for reservation list and update header', async () => {
    const id = 1;
    const addReservation = jest.fn(() => '<div>Reservation</div>');
    const reservationCounter = jest.fn(() => 5);
    const storedReservations = jest.fn(() => Promise.resolve({ data: [{ username: 'User1', date_start: '2022-01-01', date_end: '2022-01-02' }] }));

    const resList = { innerHTML: '' };
    const reservationHeader = { innerHTML: '' };
    const e = { target: { reset: jest.fn() } };

    await storedReservationsHandler(id, addReservation, reservationCounter, storedReservations, resList, reservationHeader, e);

    expect(storedReservations).toHaveBeenCalledWith(id);
    expect(addReservation).toHaveBeenCalledWith('User1', '2022-01-01', '2022-01-02');
    expect(resList.innerHTML).toBe('<div>Reservation</div>');
    expect(reservationHeader.innerHTML).toBe('Reservations(5)');
    expect(reservationCounter).toHaveBeenCalledWith([{ username: 'User1', date_start: '2022-01-01', date_end: '2022-01-02' }]);
    expect(e.target.reset).toHaveBeenCalled();
  });
});
