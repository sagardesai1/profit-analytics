interface FinanceTransaction {
  currency: string;
  status: string;
  settlement_amount: string;
  revenue_amount: string;
  gross_sales_amount: string;
  net_sales_amount: string;
  platform_commission_amount: string;
  shipping_fee_amount: string;
  sales_tax_amount: string;
  sku_statement_transactions: Array<{
    product_name: string;
    sku_name: string;
    quantity: number;
    settlement_amount: string;
    revenue_amount: string;
    gross_sales_amount: string;
  }>;
}

interface FinanceStatementProps {
  data: {
    order_create_time: number;
    order_id: string;
    statement_transactions: FinanceTransaction[];
  };
}

export function FinanceStatement({ data }: FinanceStatementProps) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="mb-4">
        <h3 className="text-lg font-semibold">Order #{data.order_id}</h3>
        <p className="text-gray-600">
          Created: {new Date(data.order_create_time * 1000).toLocaleString()}
        </p>
      </div>

      {data.statement_transactions.map((transaction, index) => (
        <div key={index} className="border rounded-lg p-4 mb-4">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
            <div>
              <p className="text-sm text-gray-600">Status</p>
              <p className="font-semibold">{transaction.status}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Settlement Amount</p>
              <p className="font-semibold text-green-600">
                {transaction.settlement_amount} {transaction.currency}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Revenue</p>
              <p className="font-semibold">
                {transaction.revenue_amount} {transaction.currency}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Gross Sales</p>
              <p className="font-semibold">
                {transaction.gross_sales_amount} {transaction.currency}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Net Sales</p>
              <p className="font-semibold">
                {transaction.net_sales_amount} {transaction.currency}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Platform Commission</p>
              <p className="font-semibold text-red-600">
                {transaction.platform_commission_amount} {transaction.currency}
              </p>
            </div>
          </div>

          <div className="mt-4">
            <h4 className="font-semibold mb-2">Products</h4>
            <div className="space-y-2">
              {transaction.sku_statement_transactions.map((sku, skuIndex) => (
                <div
                  key={skuIndex}
                  className="bg-gray-50 p-3 rounded flex justify-between items-center"
                >
                  <div>
                    <p className="font-medium">{sku.product_name}</p>
                    <p className="text-sm text-gray-600">
                      {sku.sku_name} × {sku.quantity}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">
                      {sku.settlement_amount} {transaction.currency}
                    </p>
                    <p className="text-sm text-gray-600">
                      Revenue: {sku.revenue_amount} {transaction.currency}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
