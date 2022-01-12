<template>
     <div class="card__social">
            <div class="card__social_likes"><i class="likes fas fa-thumbs-up"></i> {{ card.likes}}</div>
            <div class="card__social_comments">{{ card.comments}}<i class="comments fas fa-comments"></i></div>
        </div>
</template>

<script>
export default {
    props: ['card'],
}
</script>

<style lang="scss">
     .card__social {
            display: flex;
            justify-content: space-between;

            &_likes {
                margin-top: 20px;

            .likes {
                margin: 0 10px 0 5px;
                color: #595b5c;
                height: 10px;
                font-size: 20px;
                }
            }

            &_comments {
                 margin-top: 20px;

                .comments {
                    margin: 0 5px 0 10px;
                    color: #595b5c;
                    height: 10px;
                    font-size: 20px;
                }
            }
        }
</style>