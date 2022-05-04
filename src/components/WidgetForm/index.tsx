import { useState } from "react";

import bugImageURL from "../../assets/bug.svg"
import ideaImageURL from "../../assets/idea.svg"
import thoughtImageURL from "../../assets/thought.svg"
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSuccessStep } from "./Steps/FeedbackSuccessStep";

export const feedbackTypes = {
	BUG: {
		title: 'Problema',
		image: {
			source: bugImageURL, 
			alt: "Ilustração de um inseto roxo",
		},
		placeholder: "Algo não está funcionando bem? Queremos corrigir. Conte com detalhes o que está acontecendo..."
	},
	IDEA: {
		title: 'Ideia',
		image: {
			source: ideaImageURL, 
			alt: "Lâmpada acesa",
		},
		placeholder: "Teve uma ideia de melhoria ou de nova funcionalidade? Conta pra gente!"
	},
	OTHER: {
		title: 'Outro',
		image: {
			source: thoughtImageURL, 
			alt: "Nuvem de pensamento",
		},
		placeholder: "Queremos te ouvir. O que você gostaria de nos dizer? "
	}
}

export type FeedbackType = keyof typeof feedbackTypes

export function WidgetForm() {
	const [feedbackType, setFeedbackType]	= useState<FeedbackType | null>(null)
	const [feedbackSent, setFeedbackSent ] = useState(false)

	function handleRestartFeedback(){
		setFeedbackSent(false)
		setFeedbackType(null)
	}

	return (
		<div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">		
			{feedbackSent ? (
				<FeedbackSuccessStep onFeedbackRestartRequested={handleRestartFeedback} />
			) : (
				<>
					{!feedbackType ? (
						<FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
					) : (
						<FeedbackContentStep 
							feedbackType={feedbackType}
							onFeedbackRestartRequested={handleRestartFeedback}
							onFeedbackSent={() => setFeedbackSent(true)}
						/>
					)}
				</>
			)}
			
			<footer className="text-xs text-neutral-400">
				<p>Feito com ♥ pela <a className="underline underline-offset-2" href="https://rocketseat.com.br" target="_blank">Rocketseat</a></p>
			</footer>
		</div>
	);
}