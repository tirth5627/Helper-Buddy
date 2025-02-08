
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.3.1
 * Query Engine version: 4123509d24aa4dede1e864b46351bf2790323b69
 */
Prisma.prismaVersion = {
  client: "6.3.1",
  engine: "4123509d24aa4dede1e864b46351bf2790323b69"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
  user_id: 'user_id',
  email: 'email',
  password_hash: 'password_hash',
  first_name: 'first_name',
  last_name: 'last_name',
  phone_number: 'phone_number',
  role: 'role',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.ServiceScalarFieldEnum = {
  service_id: 'service_id',
  name: 'name',
  description: 'description',
  price: 'price',
  category: 'category',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.ServicePartnerScalarFieldEnum = {
  partner_id: 'partner_id',
  user_id: 'user_id',
  company_name: 'company_name',
  address: 'address',
  pin_codes: 'pin_codes',
  status: 'status',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.ServiceOrderScalarFieldEnum = {
  order_id: 'order_id',
  user_id: 'user_id',
  service_id: 'service_id',
  partner_id: 'partner_id',
  order_date: 'order_date',
  service_date: 'service_date',
  remarks: 'remarks',
  status: 'status',
  payment_status: 'payment_status'
};

exports.Prisma.PaymentScalarFieldEnum = {
  payment_id: 'payment_id',
  order_id: 'order_id',
  amount: 'amount',
  payment_date: 'payment_date',
  payment_method: 'payment_method',
  payment_status: 'payment_status',
  transaction_id: 'transaction_id'
};

exports.Prisma.WalletScalarFieldEnum = {
  wallet_id: 'wallet_id',
  user_id: 'user_id',
  balance: 'balance'
};

exports.Prisma.ReferralScalarFieldEnum = {
  referral_id: 'referral_id',
  user_id: 'user_id',
  referral_code: 'referral_code',
  referred_by: 'referred_by',
  bonus: 'bonus'
};

exports.Prisma.ReviewScalarFieldEnum = {
  review_id: 'review_id',
  order_id: 'order_id',
  rating: 'rating',
  review_text: 'review_text',
  created_at: 'created_at'
};

exports.Prisma.BlogScalarFieldEnum = {
  blog_id: 'blog_id',
  title: 'title',
  content: 'content',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.FAQScalarFieldEnum = {
  faq_id: 'faq_id',
  question: 'question',
  answer: 'answer'
};

exports.Prisma.TestimonialScalarFieldEnum = {
  testimonial_id: 'testimonial_id',
  user_id: 'user_id',
  testimonial_text: 'testimonial_text',
  created_at: 'created_at'
};

exports.Prisma.AnalyticsScalarFieldEnum = {
  analytics_id: 'analytics_id',
  traffic_count: 'traffic_count',
  sales_count: 'sales_count',
  date: 'date'
};

exports.Prisma.NotificationScalarFieldEnum = {
  notification_id: 'notification_id',
  user_id: 'user_id',
  notification_text: 'notification_text',
  read_status: 'read_status',
  created_at: 'created_at'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.UserRole = exports.$Enums.UserRole = {
  customer: 'customer',
  admin: 'admin',
  service_partner: 'service_partner'
};

exports.ServicePartnerStatus = exports.$Enums.ServicePartnerStatus = {
  pending: 'pending',
  approved: 'approved',
  rejected: 'rejected'
};

exports.ServiceOrderStatus = exports.$Enums.ServiceOrderStatus = {
  pending: 'pending',
  in_progress: 'in_progress',
  completed: 'completed',
  canceled: 'canceled'
};

exports.PaymentStatus = exports.$Enums.PaymentStatus = {
  pending: 'pending',
  completed: 'completed',
  failed: 'failed'
};

exports.PaymentMethod = exports.$Enums.PaymentMethod = {
  razorpay: 'razorpay',
  wallet: 'wallet'
};

exports.Prisma.ModelName = {
  User: 'User',
  Service: 'Service',
  ServicePartner: 'ServicePartner',
  ServiceOrder: 'ServiceOrder',
  Payment: 'Payment',
  Wallet: 'Wallet',
  Referral: 'Referral',
  Review: 'Review',
  Blog: 'Blog',
  FAQ: 'FAQ',
  Testimonial: 'Testimonial',
  Analytics: 'Analytics',
  Notification: 'Notification'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
