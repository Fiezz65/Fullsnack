import { CustomerReview as CustomerReviewType } from '../../../models/types'

interface Props {
    review: CustomerReviewType
}

export const CustomerReview = ({ review }: Props) => (
    <div className="bg-green-100 border-green-600 border-2 p-4 rounded-lg flex flex-col gap-2 text-sm font-mono text-green-600">
        <p className="font-bold">{review.userName}</p>
        <p>⭐ {review.rating}</p>
        <p>{review.comment}</p>
        <p className="text-xs">{review.date}</p>
    </div>
)