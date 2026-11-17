import { site } from '@/lib/site';

/** One source for legal identity on the footer and company page. */
export function CompanyDetails() {
  return (
    <div className="company-details">
      <p className="company-name">{site.company.name}</p>
      <dl>
        <div>
          <dt>Mã số thuế:</dt>
          <dd>{site.company.taxCode}</dd>
        </div>
        <div>
          <dt>Địa chỉ:</dt>
          <dd>{site.company.address}</dd>
        </div>
      </dl>
    </div>
  );
}
