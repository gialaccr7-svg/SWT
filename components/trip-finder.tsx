import { seatCounts } from '@/lib/catalog';
export function TripFinder() {
  return (
    <form className="trip-finder" action="/bang-gia" method="get">
      <div className="finder-intro">
        <strong>Tra giá chuyến đi</strong>
        <span>Khởi hành từ TP.HCM</span>
      </div>
      <label>
        Số chỗ ngồi
        <select name="seats" defaultValue="">
          <option value="">Chọn số chỗ</option>
          {seatCounts.map((n) => (
            <option key={n} value={n}>
              {n} chỗ
            </option>
          ))}
        </select>
      </label>
      <label>
        Điểm đến
        <input name="q" placeholder="Ví dụ: Cần Thơ" />
      </label>
      <button className="button" type="submit">
        Tra giá thuê xe
      </button>
    </form>
  );
}
