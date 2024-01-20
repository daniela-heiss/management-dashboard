export interface Orders {
    O_ORDERKEY: number;
    O_CUSTKEY: number;
    O_ORDERSTATUS: Text;
    O_TOTALPRICE: number;
    O_ORDERDATE: Date;
    O_ORDERPRIORITY: Text;
    O_CLERK: Text;
    O_SHIPPRIORITY: number;
    O_COMMENT: string;
    CountedOrders?: number;
  }